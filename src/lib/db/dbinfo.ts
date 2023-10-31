import type { PoolClient } from 'pg';
import { z } from 'zod';

export const DBInfoSchema = z.object({
	id: z.number(),
	year: z.string(),
	month: z.string(),
	day: z.string(),
	hour: z.string(),
	minute: z.string()
});

export const emptyDBInfo = DBInfoSchema.parse({
	id: 0,
	year: '0000',
	month: '00',
	day: '00',
	hour: '00',
	minute: '00'
});

export const getDBInfo = async (client: PoolClient) => {
	const result = await client.query(`SELECT * FROM dbinfo LIMIT 1`);
	if (result.rowCount !== 1) {
		return emptyDBInfo;
	}
	const parse = DBInfoSchema.safeParse(result.rows[0]);
	if (!parse.success) {
		console.error(parse.error.message);
		return emptyDBInfo;
	}
	return parse.data;
};
