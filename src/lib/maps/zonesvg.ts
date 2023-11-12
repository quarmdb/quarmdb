import {z} from 'zod';

export const Point3DSchema = z.object({
  x: z.coerce.number(),
  y: z.coerce.number(),
  z: z.coerce.number()
});

export type Point3DType = z.infer<typeof Point3DSchema>;

export const RGBSchema = z.object({
  r: z.coerce.number(),
  g: z.coerce.number(),
  b: z.coerce.number()
});

export type RGBType = z.infer<typeof RGBSchema>;

export type LineType = {
  type: 'line',
  start: Point3DType,
  end: Point3DType,
  color: RGBType
}

export type MapType = LineType;

export const parseAsLine = (line:string):LineType => {
  const tokens = line.replaceAll(',','').split(' ');
  if(tokens.length !== 10) {
    console.error('parseAsLine tokens.length !== 10')
    throw new Error();  
  }

  const start = Point3DSchema.parse({
    x: tokens[1], 
    y: tokens[2], 
    z: tokens[3]
  });
  const end = Point3DSchema.parse({
    x: tokens[4], 
    y: tokens[5], 
    z: tokens[6]
  });
  const color = RGBSchema.parse({
    r: tokens[7],
    g: tokens[8],
    b: tokens[9]
  });

  return {
    type: 'line', start, end, color
  }

}

export const parseMapFile = (file:string)=> {
  const parse:MapType[] = [];
  file.split('\n').forEach((line:string) => {
    const split = line.split(' ');
    if(split.at(0) === 'L') parse.push(parseAsLine(line));
  })
  return parse;
}

export type MinMax3D = {
  x: {
    min: number,
    max: number
  },
  y: {
    min: number,
    max: number
  }, 
  z: {
    min: number,
    max: number
  }
}

export const minMaxMapFile = (data:MapType[]):MinMax3D => {
  if(data.length === 0 ) {
    return {x: { min: 0, max: 0}, y: { min: 0, max: 0}, z: { min: 0, max: 0}};
  }

  let current = {
    x: {
      min: data[0].start.x,
      max: data[0].start.x,
    },
    y: {
      min: data[0].start.y,
      max: data[0].start.y,
    },
    z: {
      min: data[0].start.z,
      max: data[0].start.z,
    }
  }

  for(let i = 0; i < data.length; i++) {
    if(data[i].start.x < current.x.min) current.x.min = data[i].start.x;
    if(data[i].start.x > current.x.max) current.x.max = data[i].start.x;

    if(data[i].start.y < current.y.min) current.y.min = data[i].start.y;
    if(data[i].start.y > current.y.max) current.y.max = data[i].start.y;

    if(data[i].start.z < current.z.min) current.z.min = data[i].start.z;
    if(data[i].start.z > current.z.max) current.z.max = data[i].start.z;

    if(data[i].end.x < current.x.min) current.x.min = data[i].end.x;
    if(data[i].end.x > current.x.max) current.x.max = data[i].end.x;

    if(data[i].end.y < current.y.min) current.y.min = data[i].end.y;
    if(data[i].end.y > current.y.max) current.y.max = data[i].end.y;

    if(data[i].end.z < current.z.min) current.z.min = data[i].end.z;
    if(data[i].end.z > current.z.max) current.z.max = data[i].end.z;
  }

  return current;
}