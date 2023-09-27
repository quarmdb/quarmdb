import {z} from 'zod';
export const ItemsSchema= z.object({
name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
aagi: z.number(),
ac: z.number(),
acha: z.number(),
adex: z.number(),
aint: z.number(),
asta: z.number(),
astr: z.number(),
awis: z.number(),
bagsize: z.number(),
bagslots: z.number(),
bagtype: z.number(),
bagwr: z.number(),
banedmgamt: z.number(),
banedmgbody: z.number(),
banedmgrace: z.number(),
bardeffect: z.number(),
bardeffecttype: z.number(),
bardlevel: z.number(),
bardlevel2: z.number(),
bardname: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
bardtype: z.number(),
bardunk1: z.number(),
bardunk2: z.number(),
bardunk3: z.number(),
bardunk4: z.number(),
bardunk5: z.number(),
bardunk7: z.number(),
bardvalue: z.number(),
book: z.number(),
booktype: z.number(),
casttime: z.number(),
casttime_: z.number(),
classes: z.number(),
clickeffect: z.number(),
clicklevel: z.number(),
clicklevel2: z.number(),
clickname: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
clicktype: z.number(),
clickunk5: z.number(),
clickunk6: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
clickunk7: z.number(),
color: z.number(),
comment: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
cr: z.number(),
created: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
damage: z.number(),
deity: z.number(),
delay: z.number(),
dr: z.number(),
elemdmgamt: z.number(),
elemdmgtype: z.number(),
factionamt1: z.number(),
factionamt2: z.number(),
factionamt3: z.number(),
factionamt4: z.number(),
factionmod1: z.number(),
factionmod2: z.number(),
factionmod3: z.number(),
factionmod4: z.number(),
filename: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
focuseffect: z.number(),
focuslevel: z.number(),
focuslevel2: z.number(),
focusname: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
focustype: z.number(),
focusunk1: z.number(),
focusunk2: z.number(),
focusunk3: z.number(),
focusunk4: z.number(),
focusunk5: z.number(),
focusunk6: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
focusunk7: z.number(),
fr: z.number(),
fvnodrop: z.number(),
gmflag: z.number(),
hp: z.number(),
icon: z.number(),
id: z.number(),
idfile: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
itemclass: z.number(),
itemtype: z.number(),
light: z.number(),
lore: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
lorefile: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
magic: z.number(),
mana: z.number(),
material: z.number(),
max_expansion: z.number(),
maxcharges: z.number(),
min_expansion: z.number(),
minstatus: z.number(),
mr: z.number(),
nodrop: z.number(),
norent: z.number(),
pr: z.number(),
price: z.number(),
proceffect: z.number(),
proclevel: z.number(),
proclevel2: z.number(),
procname: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
procrate: z.number(),
proctype: z.number(),
procunk1: z.number(),
procunk2: z.number(),
procunk3: z.number(),
procunk4: z.number(),
procunk6: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
procunk7: z.number(),
questitemflag: z.number(),
races: z.number(),
range: z.number(),
recastdelay: z.number(),
recasttype: z.number(),
reclevel: z.number(),
recskill: z.number(),
reqlevel: z.number(),
scrolleffect: z.number(),
scrolllevel: z.number(),
scrolllevel2: z.number(),
scrollname: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
scrolltype: z.number(),
scrollunk1: z.number(),
scrollunk2: z.number(),
scrollunk3: z.number(),
scrollunk4: z.number(),
scrollunk5: z.number(),
scrollunk6: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
scrollunk7: z.number(),
sellrate: z.number(),
serialization: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
serialized: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
size: z.number(),
skillmodtype: z.number(),
skillmodvalue: z.number(),
slots: z.number(),
soulbound: z.number(),
source: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
stackable: z.number(),
stacksize: z.number(),
tradeskills: z.number(),
updated: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
verified: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
weight: z.number(),
worneffect: z.number(),
wornlevel: z.number(),
wornlevel2: z.number(),
wornname: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
worntype: z.number(),
wornunk1: z.number(),
wornunk2: z.number(),
wornunk3: z.number(),
wornunk4: z.number(),
wornunk5: z.number(),
wornunk6: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
wornunk7: z.number(),
});
export type ItemsType = z.infer<typeof ItemsSchema>;
