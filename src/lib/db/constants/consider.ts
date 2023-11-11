/**
 https://github.com/SecretsOTheP/EQMacEmu/blob/4859a0e132432305669314f009312e31b4ae5971/zone/mob_ai.cpp#L2891
 */
export const CON_LIGHTBLUE	=18;
export const CON_BLUE =	4;
export const CON_WHITE	=20;
export const CON_YELLOW =15;
export const CON_RED	=13;
export const CON_GREEN	=	2;

export type ConsiderLevelsType = {
  green: {
    min: number,
    max: number
  },
  lightblue: {
    min: number,
    max: number
  },
  blue: {
    min: number,
    max: number
  },
  white: number,
  yellow: {
    min: number,
    max: number
  },
  red: {
    min: number,
    max: number
  }
}

export const getConsiderLevels = (level:number):ConsiderLevelsType => {
  let greenHigh = 0;
  let lightBlueHigh = 0;
  

  if(level <= 7) {
    greenHigh = -4;
  } else if (level <= 8) {
    greenHigh = -5;
    lightBlueHigh = -4;
  } else if (level <= 12) {
    greenHigh = -6;
    lightBlueHigh = -4;
  }else if (level <= 16) {
    greenHigh = -7;
    lightBlueHigh = -5;
  }else if (level <= 20) {
    greenHigh = -8;
    lightBlueHigh = -6;
  }else if (level <= 24) {
    greenHigh = -9;
    lightBlueHigh = -7;
  }else if (level <= 28) {
    greenHigh = -10;
    lightBlueHigh = -8;
  }else if (level <= 30) {
    greenHigh = -11;
    lightBlueHigh = -9;
  }else if (level <= 32) {
    greenHigh = -12;
    lightBlueHigh = -9;
  }else if (level <= 36) {
    greenHigh = -13;
    lightBlueHigh = -10;
  }else if (level <= 40) {
    greenHigh = -14;
    lightBlueHigh = -11;
  }else if (level <= 44) {
    greenHigh = -16;
    lightBlueHigh = -12;
  }else if (level <= 48) {
    greenHigh = -17;
    lightBlueHigh = -13;
  }else if (level <= 52) {
    greenHigh = -18;
    lightBlueHigh = -14;
  }else if (level <= 54) {
    greenHigh = -19;
    lightBlueHigh = -15;
  }else if (level <= 56) {
    greenHigh = -20;
    lightBlueHigh = -15;
  }else if (level <= 60) {
    greenHigh = -21;
    lightBlueHigh = -16;
  }else if (level <= 61) {
    greenHigh = -19;
    lightBlueHigh = -14;
  }else if (level <= 62) {
    greenHigh = -17;
    lightBlueHigh = -12;
  }else {
    greenHigh = -16;
    lightBlueHigh = -11;
  }

  let con = {
    green: {
      min: 0,
      max: 0
    },
    lightblue: {
      min: 0,
      max: 0
    },
    blue: {
      min: 0,
      max: 0
    },
    white: level,
    yellow: {
      min: level + 1,
      max: level + 2
    },
    red: {
      min: level + 3,
      max: 68
    }
  }

  if(level === 1) return con;

  if(level <= 4) {
    con.blue.min = 1;
    con.blue.max = level - 1;
    return con;
  }

  con.green.min = 1;
  con.green.max = level+greenHigh;
  
  con.blue.max = level -1;
  if(lightBlueHigh === 0) {
    con.blue.min = con.green.max + 1;
    return con;
  }

  con.lightblue.min = con.green.max+1;
  con.lightblue.max = level + lightBlueHigh;
  con.blue.min = con.lightblue.max + 1;

  return con;

}

export const getConsider = (mylevel:number, otherLevel:number) => {
  const diff = otherLevel - mylevel;
  let conlevel = 0;

  if (diff == 0)
  return CON_WHITE;
else if (diff >= 1 && diff <= 2)
  return CON_YELLOW;
else if (diff >= 3)
  return CON_RED;

if (mylevel <= 7)
{
  if (diff <= -4)
      conlevel = CON_GREEN;
  else
      conlevel = CON_BLUE;
}
else if (mylevel <= 8)
{
  if (diff <= -5)
      conlevel = CON_GREEN;
  else if (diff <= -4)
      conlevel = CON_LIGHTBLUE;
  else
      conlevel = CON_BLUE;
}
else if (mylevel <= 12)
{
  if (diff <= -6)
      conlevel = CON_GREEN;
  else if (diff <= -4)
      conlevel = CON_LIGHTBLUE;
  else
      conlevel = CON_BLUE;
}
else if (mylevel <= 16)
{
  if (diff <= -7)
      conlevel = CON_GREEN;
  else if (diff <= -5)
      conlevel = CON_LIGHTBLUE;
  else
      conlevel = CON_BLUE;
}
else if (mylevel <= 20)
{
  if (diff <= -8)
      conlevel = CON_GREEN;
  else if (diff <= -6)
      conlevel = CON_LIGHTBLUE;
  else
      conlevel = CON_BLUE;
}
else if (mylevel <= 24)
{
  if (diff <= -9)
      conlevel = CON_GREEN;
  else if (diff <= -7)
      conlevel = CON_LIGHTBLUE;
  else
      conlevel = CON_BLUE;
}
else if (mylevel <= 28)
{
  if (diff <= -10)
      conlevel = CON_GREEN;
  else if (diff <= -8)
      conlevel = CON_LIGHTBLUE;
  else
      conlevel = CON_BLUE;
}
else if (mylevel <= 30)
{
  if (diff <= -11)
      conlevel = CON_GREEN;
  else if (diff <= -9)
      conlevel = CON_LIGHTBLUE;
  else
      conlevel = CON_BLUE;
}
else if (mylevel <= 32)
{
  if (diff <= -12)
      conlevel = CON_GREEN;
  else if (diff <= -9)
      conlevel = CON_LIGHTBLUE;
  else
      conlevel = CON_BLUE;
}
else if (mylevel <= 36)
{
  if (diff <= -13)
      conlevel = CON_GREEN;
  else if (diff <= -10)
      conlevel = CON_LIGHTBLUE;
  else
      conlevel = CON_BLUE;
}
else if (mylevel <= 40)
{
  if (diff <= -14)
      conlevel = CON_GREEN;
  else if (diff <= -11)
      conlevel = CON_LIGHTBLUE;
  else
      conlevel = CON_BLUE;
}
else if (mylevel <= 44)
{
  if (diff <= -16)
      conlevel = CON_GREEN;
  else if (diff <= -12)
      conlevel = CON_LIGHTBLUE;
  else
      conlevel = CON_BLUE;
}
else if (mylevel <= 48)
{
  if (diff <= -17)
      conlevel = CON_GREEN;
  else if (diff <= -13)
      conlevel = CON_LIGHTBLUE;
  else
      conlevel = CON_BLUE;
}
else if (mylevel <= 52)
{
  if (diff <= -18)

      conlevel = CON_GREEN;
  else if (diff <= -14)
      conlevel = CON_LIGHTBLUE;
  else
      conlevel = CON_BLUE;
}
else if (mylevel <= 54)
{
  if (diff <= -19)

      conlevel = CON_GREEN;
  else if (diff <= -15)
      conlevel = CON_LIGHTBLUE;
  else
      conlevel = CON_BLUE;
}
else if (mylevel <= 56)
{
  if (diff <= -20)

      conlevel = CON_GREEN;
  else if (diff <= -15)
      conlevel = CON_LIGHTBLUE;
  else
      conlevel = CON_BLUE;
}
else if (mylevel <= 60)
{
  if (diff <= -21)
      conlevel = CON_GREEN;
  else if (diff <= -16)
      conlevel = CON_LIGHTBLUE;
  else
      conlevel = CON_BLUE;
}
else if (mylevel <= 61)
{
  if (diff <= -19)
      conlevel = CON_GREEN;
  else if (diff <= -14)
      conlevel = CON_LIGHTBLUE;
  else
      conlevel = CON_BLUE;
}
else if (mylevel <= 62)
{
  if (diff <= -17)
      conlevel = CON_GREEN;
  else if (diff <= -12)
      conlevel = CON_LIGHTBLUE;
  else
      conlevel = CON_BLUE;
}
else
{
  if (diff <= -16)
      conlevel = CON_GREEN;
  else if (diff <= -11)
      conlevel = CON_LIGHTBLUE;
  else
      conlevel = CON_BLUE;
}

return conlevel;

}