import { z } from 'zod';

export const SearchNameSchema = z
	.string()
	.regex(/^[a-zA-Z0-9 _]*$/gi, {
		message: 'Name can only have letters, numbers and spaces'
	});

export const SearchZoneShortNameSchema = z
	.string()
	.regex(/^[a-z0-9]*$/gi, {
		message: 'Zone shortnames are only letters and numbers'
	});
