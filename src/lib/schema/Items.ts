import { z } from 'zod';
export const ItemsSchema = z.object({
	name: z.coerce
		.string()
		.nullable()
		.transform((e) => {
			if (e === null) return '';
			else return e;
		}),
	aagi: z.coerce.number(),
	ac: z.coerce.number(),
	acha: z.coerce.number(),
	adex: z.coerce.number(),
	aint: z.coerce.number(),
	asta: z.coerce.number(),
	astr: z.coerce.number(),
	awis: z.coerce.number(),
	bagsize: z.coerce.number(),
	bagslots: z.coerce.number(),
	bagtype: z.coerce.number(),
	bagwr: z.coerce.number(),
	banedmgamt: z.coerce.number(),
	banedmgbody: z.coerce.number(),
	banedmgrace: z.coerce.number(),
	bardeffect: z.coerce.number(),
	bardeffecttype: z.coerce.number(),
	bardlevel: z.coerce.number(),
	bardlevel2: z.coerce.number(),
	bardname: z.coerce
		.string()
		.nullable()
		.transform((e) => {
			if (e === null) return '';
			else return e;
		}),
	bardtype: z.coerce.number(),
	bardunk1: z.coerce.number(),
	bardunk2: z.coerce.number(),
	bardunk3: z.coerce.number(),
	bardunk4: z.coerce.number(),
	bardunk5: z.coerce.number(),
	bardunk7: z.coerce.number(),
	bardvalue: z.coerce.number(),
	book: z.coerce.number(),
	booktype: z.coerce.number(),
	casttime: z.coerce.number(),
	casttime_: z.coerce.number(),
	classes: z.coerce.number(),
	clickeffect: z.coerce.number(),
	clicklevel: z.coerce.number(),
	clicklevel2: z.coerce.number(),
	clickname: z.coerce
		.string()
		.nullable()
		.transform((e) => {
			if (e === null) return '';
			else return e;
		}),
	clicktype: z.coerce.number(),
	clickunk5: z.coerce.number(),
	clickunk6: z.coerce
		.string()
		.nullable()
		.transform((e) => {
			if (e === null) return '';
			else return e;
		}),
	clickunk7: z.coerce.number(),
	color: z.coerce.number(),
	comment: z.coerce
		.string()
		.nullable()
		.transform((e) => {
			if (e === null) return '';
			else return e;
		}),
	cr: z.coerce.number(),
	created: z.coerce
		.string()
		.nullable()
		.transform((e) => {
			if (e === null) return '';
			else return e;
		}),
	damage: z.coerce.number(),
	deity: z.coerce.number(),
	delay: z.coerce.number(),
	dr: z.coerce.number(),
	elemdmgamt: z.coerce.number(),
	elemdmgtype: z.coerce.number(),
	factionamt1: z.coerce.number(),
	factionamt2: z.coerce.number(),
	factionamt3: z.coerce.number(),
	factionamt4: z.coerce.number(),
	factionmod1: z.coerce.number(),
	factionmod2: z.coerce.number(),
	factionmod3: z.coerce.number(),
	factionmod4: z.coerce.number(),
	filename: z.coerce
		.string()
		.nullable()
		.transform((e) => {
			if (e === null) return '';
			else return e;
		}),
	focuseffect: z.coerce.number(),
	focuslevel: z.coerce.number(),
	focuslevel2: z.coerce.number(),
	focusname: z.coerce
		.string()
		.nullable()
		.transform((e) => {
			if (e === null) return '';
			else return e;
		}),
	focustype: z.coerce.number(),
	focusunk1: z.coerce.number(),
	focusunk2: z.coerce.number(),
	focusunk3: z.coerce.number(),
	focusunk4: z.coerce.number(),
	focusunk5: z.coerce.number(),
	focusunk6: z.coerce
		.string()
		.nullable()
		.transform((e) => {
			if (e === null) return '';
			else return e;
		}),
	focusunk7: z.coerce.number(),
	fr: z.coerce.number(),
	fvnodrop: z.coerce.number(),
	gmflag: z.coerce.number(),
	hp: z.coerce.number(),
	icon: z.coerce.number(),
	id: z.coerce.number(),
	idfile: z.coerce
		.string()
		.nullable()
		.transform((e) => {
			if (e === null) return '';
			else return e;
		}),
	itemclass: z.coerce.number(),
	itemtype: z.coerce.number(),
	light: z.coerce.number(),
	lore: z.coerce
		.string()
		.nullable()
		.transform((e) => {
			if (e === null) return '';
			else return e;
		}),
	lorefile: z.coerce
		.string()
		.nullable()
		.transform((e) => {
			if (e === null) return '';
			else return e;
		}),
	magic: z.coerce.number(),
	mana: z.coerce.number(),
	material: z.coerce.number(),
	max_expansion: z.coerce.number(),
	maxcharges: z.coerce.number(),
	min_expansion: z.coerce.number(),
	minstatus: z.coerce.number(),
	mr: z.coerce.number(),
	nodrop: z.coerce.number(),
	norent: z.coerce.number(),
	pr: z.coerce.number(),
	price: z.coerce.number(),
	proceffect: z.coerce.number(),
	proclevel: z.coerce.number(),
	proclevel2: z.coerce.number(),
	procname: z.coerce
		.string()
		.nullable()
		.transform((e) => {
			if (e === null) return '';
			else return e;
		}),
	procrate: z.coerce.number(),
	proctype: z.coerce.number(),
	procunk1: z.coerce.number(),
	procunk2: z.coerce.number(),
	procunk3: z.coerce.number(),
	procunk4: z.coerce.number(),
	procunk6: z.coerce
		.string()
		.nullable()
		.transform((e) => {
			if (e === null) return '';
			else return e;
		}),
	procunk7: z.coerce.number(),
	questitemflag: z.coerce.number(),
	races: z.coerce.number(),
	range: z.coerce.number(),
	recastdelay: z.coerce.number(),
	recasttype: z.coerce.number(),
	reclevel: z.coerce.number(),
	recskill: z.coerce.number(),
	reqlevel: z.coerce.number(),
	scrolleffect: z.coerce.number(),
	scrolllevel: z.coerce.number(),
	scrolllevel2: z.coerce.number(),
	scrollname: z.coerce
		.string()
		.nullable()
		.transform((e) => {
			if (e === null) return '';
			else return e;
		}),
	scrolltype: z.coerce.number(),
	scrollunk1: z.coerce.number(),
	scrollunk2: z.coerce.number(),
	scrollunk3: z.coerce.number(),
	scrollunk4: z.coerce.number(),
	scrollunk5: z.coerce.number(),
	scrollunk6: z.coerce
		.string()
		.nullable()
		.transform((e) => {
			if (e === null) return '';
			else return e;
		}),
	scrollunk7: z.coerce.number(),
	sellrate: z.coerce.number(),
	serialization: z.coerce
		.string()
		.nullable()
		.transform((e) => {
			if (e === null) return '';
			else return e;
		}),
	serialized: z.coerce
		.string()
		.nullable()
		.transform((e) => {
			if (e === null) return '';
			else return e;
		}),
	size: z.coerce.number(),
	skillmodtype: z.coerce.number(),
	skillmodvalue: z.coerce.number(),
	slots: z.coerce.number(),
	soulbound: z.coerce.number(),
	source: z.coerce
		.string()
		.nullable()
		.transform((e) => {
			if (e === null) return '';
			else return e;
		}),
	stackable: z.coerce.number(),
	stacksize: z.coerce.number(),
	tradeskills: z.coerce.number(),
	updated: z.coerce
		.string()
		.nullable()
		.transform((e) => {
			if (e === null) return '';
			else return e;
		}),
	verified: z.coerce
		.string()
		.nullable()
		.transform((e) => {
			if (e === null) return '';
			else return e;
		}),
	weight: z.coerce.number(),
	worneffect: z.coerce.number(),
	wornlevel: z.coerce.number(),
	wornlevel2: z.coerce.number(),
	wornname: z.coerce
		.string()
		.nullable()
		.transform((e) => {
			if (e === null) return '';
			else return e;
		}),
	worntype: z.coerce.number(),
	wornunk1: z.coerce.number(),
	wornunk2: z.coerce.number(),
	wornunk3: z.coerce.number(),
	wornunk4: z.coerce.number(),
	wornunk5: z.coerce.number(),
	wornunk6: z.coerce
		.string()
		.nullable()
		.transform((e) => {
			if (e === null) return '';
			else return e;
		}),
	wornunk7: z.coerce.number()
});
export type ItemsType = z.infer<typeof ItemsSchema>;
