export const clickTypes = [
{id:0,	clickType:"None"},
{id:1,	clickType:"Click from Inventory with Level requirement"},
{id:3,	clickType:"Expendable"},
{id:4,	clickType:"Must equip to click"},
{id:5,	clickType:"Click from inventory with Level / Class / Race requirements"},
]

export const getClickTypeById = (id:number) => {
  let found = clickTypes.find((value) => {
    return value.id === id
  });

  if(found === undefined) {
    found = clickTypes[0];
  }

  return found;
}