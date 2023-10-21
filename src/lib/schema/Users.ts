import { ZodAny, z } from 'zod';

export const UsersSchema = z.object({
	id: z.number(),
	email: z.string().email(),
	email_validation_code: z.string(),
	email_validated: z.boolean(),
	password_hash: z.string(),
	salt: z.string(),
	refresh_secret: z.string(),
	allowed_to_login: z.boolean(),
	created_at: z.string()
});

export type UsersType = z.infer<typeof UsersSchema>;

export const SecretsSchema = z.object({
	id: z.number(),
	name: z.string(),
	secret: z.string()
});

export type SecretsType = z.infer<typeof SecretsSchema>;
