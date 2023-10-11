export const BodyTypes = [
{id:1, type:'Normal'},
{id:2, type:'Lycanthrope'},
{id:3, type:'Undead'},
{id:4, type:'Giant'},
{id:5, type:'Construct'},
{id:6, type:'Extra Planar'},
{id:7, type:'Monster'},
{id:8, type:'Flying Monsters'},
{id:9, type:'Raid Giant'},
{id:10, type:'Raid Coldain'},
{id:11, type:'Untargetable'},
{id:12, type:'Vampire'},
{id:13, type:'Atenha Ra'},
{id:14, type:'Greater Akheva'},
{id:15, type:'Khati Sha'},
{id:16, type:'Seru'},
{id:17, type:'Grieg Veneficus'},
{id:18, type:'Draz Nurakk'},
{id:19, type:'God'},
{id:20, type:'Luggald'},
{id:21, type:'Animal'},
{id:22, type:'Insect'},
{id:23, type:'Fire Creature'},
{id:24, type:'Construct, Elemental, or Gargoyle'},
{id:25, type:'Plant'},
{id:26, type:'Dragon'},
{id:27, type:'Summoned Creature'},
{id:28, type:'Summoned Creature 2'},
{id:29, type:'Dragon 2'},
{id:30, type:'Velious Dragon'},
{id:31, type:'Familiar'},
{id:32, type:'Dragon 3'},
{id:33, type:'Boxes'},
{id:34, type:'Muramite'},
{id:60, type:'Untargetable 2'},
{id:63, type:'Swarm Pet'},
{id:64, type:'Monster Summoning'},
{id:66, type:'Inivisible Man'},
{id:67, type:'Special'},
]

export const getBodyType = (type:string) => {
  let found = BodyTypes.find((value) => {
    return value.type.toLowerCase() === type.toLowerCase()
  });

  if(found === undefined) {
    found = BodyTypes[0];
  }

  return found;
}

export const getBodyTypeById = (id:number) => {
  let found = BodyTypes.find((value) => {
    return value.id === id
  });

  if(found === undefined) {
    found = BodyTypes[0];
  }

  return found;
}