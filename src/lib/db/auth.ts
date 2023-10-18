import { SecretsSchema } from '$lib/schema/Users';
import { error } from '@sveltejs/kit';
import type { PoolClient } from 'pg';
import crypto from 'crypto';
import { MailtrapClient } from 'mailtrap';

export const register = async (
	email: string,
	password: string,
	client: PoolClient
) => {
	const secretsResult = await client.query(
		`SELECT * FROM secrets WHERE name = 'mailtrap_token'`
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
	const mailtrap_token = secretsParsed.data.secret;
	const mailtrap_endpoint = 'https://send.api.mailtrap.io/';

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

	console.log(query);

	const result = await client.query(query);

	console.log(result);

	//Send Email Verification
	const mailtrapClient = new MailtrapClient({
		endpoint: mailtrap_endpoint,
		token: mailtrap_token
	});

	const sender = {
		email: 'noreply@quarmdb.com',
		name: 'Mailtrap Test'
	};
	const recipients = [
		{
			email
		}
	];

	const text = `Welcome to QuarmDB, go to https://www.quarmdb.com/auth/verify/${email_validation_code} to validate your email`;

	mailtrapClient
		.send({
			from: sender,
			to: recipients,
			subject: 'QuarmDB Email Verification',
			text,
			category: 'Email Verification '
		})
		.then(console.log, console.error);
};
