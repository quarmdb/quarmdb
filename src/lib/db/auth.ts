import { SecretsSchema, UsersSchema } from '$lib/schema/Users';
import { error } from '@sveltejs/kit';
import type { PoolClient } from 'pg';
import crypto from 'crypto';
import { EmailParams, MailerSend, Recipient, Sender } from 'mailersend';
import jwt from 'jsonwebtoken';
import { z } from 'zod';

let ACCESS_TOKEN_SECRET: string | null = null;

export const makePasswordHash = (password: string, salt: string) => {
	return crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString();
};

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
	const hash = makePasswordHash(password, salt);

	const email_validation_code = crypto.randomUUID();

	const query = `INSERT INTO users
  (email, email_validation_code, email_validated, password_hash, salt, allowed_to_login)
  VALUES
  ('${email}','${email_validation_code}',false,'${hash}', '${salt}', true)`;

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

export const resetTokenSecret = async (client: PoolClient) => {
	await client.query(
		`INSERT INTO secrets(name, secret) VALUES ('token_key',gen_random_uuid())`
	);
};

//!TODO store token in persistant data once server starts
export const getTokenSecret = async (client: PoolClient) => {
	console.log(`getTokenSecret()`);
	if (ACCESS_TOKEN_SECRET === null) {
		console.log(`ACCESS_TOKEN_SECRET === null`);
		const result = await client.query(
			`SELECT secret from secrets WHERE name = 'token_key'`
		);
		if (result.rowCount !== 1) {
			console.error(`result.rowCount !== 1`);
			throw error(401);
		}
		const parse = z.object({ secret: z.string() }).safeParse(result.rows[0]);
		if (!parse.success) {
			console.error(parse.error.message);
			throw error(401);
		}
		ACCESS_TOKEN_SECRET = parse.data.secret;
	}
	return ACCESS_TOKEN_SECRET;
};

export const createToken = async (email: string, client: PoolClient) => {
	return jwt.sign({ email }, await getTokenSecret(client), {
		expiresIn: '30d'
	});
};

export const verifyToken = async (token: string, client: PoolClient) => {
	return AccessTokenPayloadSchema.parse(
		jwt.verify(token, await getTokenSecret(client))
	);
};

export const AccessTokenPayloadSchema = z.object({
	email: z.string().email()
});

export type AccessTokenPayloadType = z.infer<typeof AccessTokenPayloadSchema>;

export const signIn = async (
	email: string,
	password: string,
	client: PoolClient
) => {
	const result = await client.query(`SELECT * FROM users WHERE email = $1`, [
		email
	]);
	if (result.rowCount !== 1) {
		console.log(`result.rowCount !== 1`);
		throw error(401, 'No email found');
	}

	const parse = UsersSchema.safeParse(result.rows[0]);
	if (!parse.success) {
		console.error(parse.error.message);
		throw error(401, parse.error.message);
	}

	const user = parse.data;

	if (!user.email_validated || !user.allowed_to_login) {
		console.log(
			`${user.email} -> allowed? ${user.allowed_to_login} || validated ${user.email_validated}`
		);
		throw error(
			401,
			`${user.email} -> allowed? ${user.allowed_to_login} || validated ${user.email_validated}`
		);
	}

	const hashed_password = makePasswordHash(password, user.salt);

	if (user.password_hash !== hashed_password) {
		console.log('input password !== stored password');
		throw error(401, 'bad password');
	}

	//at this point we are good
	return await createToken(user.email, client);
};
