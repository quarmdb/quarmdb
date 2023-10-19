import { SecretsSchema, UsersSchema } from '$lib/schema/Users';
import { error } from '@sveltejs/kit';
import type { Pool, PoolClient } from 'pg';
import crypto from 'crypto';
import { EmailParams, MailerSend, Recipient, Sender } from 'mailersend';

export const register = async (
	email: string,
	password: string,
	hostname: string,
	client: PoolClient
) => {
	const secretsResult = await client.query(
		`SELECT * FROM secrets WHERE name = 'mailsend_token'`
	);
	if (secretsResult.rowCount !== 1) {
		console.error('secretsResult.rowCount !== 1');
		throw error(404);
	}
	const secretsParsed = SecretsSchema.safeParse(secretsResult.rows[0]);
	if (!secretsParsed.success) {
		console.error(secretsParsed.error.message);
		throw error(404);
	}

	const salt = crypto.randomUUID();
	const hash = crypto.pbkdf2(
		password,
		salt,
		100000,
		64,
		'sha512',
		(err, derivedKey) => {
			if (err) throw err;

			// Prints derivedKey
			console.log(derivedKey.toString('hex'));
		}
	);

	const email_validation_code = crypto.randomUUID();

	const query = `INSERT INTO users
  (email, email_validation_code, email_validated, password_hash, salt, refresh, allowed_to_login)
  VALUES
  ('${email}','${email_validation_code}',false,'${hash}', '${salt}', '', false)`;

	const result = await client.query(query);
	//Send Email Verification

	const apiKey = secretsParsed.data.secret;
	const mailerSend = new MailerSend({ apiKey });

	const sentFrom = new Sender(
		'noreply@quarmdb.com',
		'QuarmDB Email Verification'
	);
	const recipients = [new Recipient(email)];

	const url = hostname + '/auth/verify/' + email_validation_code;

	const text = `Welcome to QuarmDB, go to ${url} to validate your email`;
	const html = `<h1>Welcome to QuarmDB</h1><br />
	go to <a href="${url}">${url}</a> to validate your email`;
	const subject = 'QuarmDB Email Verification';

	const emailParams = new EmailParams()
		.setFrom(sentFrom)
		.setTo(recipients)
		.setReplyTo(sentFrom)
		.setSubject(subject)
		.setText(text)
		.setHtml(html);

	const emailResponse = await mailerSend.email.send(emailParams);

	console.log(emailResponse);
};

export const verifyEmailByToken = async (token: string, client: PoolClient) => {
	let result = await client.query(
		`SELECT * FROM users WHERE email_validation_code = $1 AND email_validated = false`,
		[token]
	);
	if (result.rowCount !== 1) {
		console.error(`/auth/verify/[token] -> did not find token`);
		return false;
	}
	let parsed = UsersSchema.safeParse(result.rows[0]);
	if (!parsed.success) {
		console.error(parsed.error.message);
		throw error(404);
	}
	let user = parsed.data;

	result = await client.query(
		`
		UPDATE 
			users 
		SET 
			email_validated = true,
			allowed_to_login = true
		WHERE
			id = $1
	`,
		[user.id]
	);

	if (result.rowCount !== 1) {
		console.error(`/auth/verify/[token] -> did not find id`);
		return false;
	}

	return true;
};

export const isEmailRegistered = async (email: string, client: PoolClient) => {
	return (
		(await client.query(`SELECT email FROM users WHERE email = $1`, [email]))
			.rowCount !== 0
	);
};
