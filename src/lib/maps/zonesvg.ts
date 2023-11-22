import { z } from 'zod';

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
	type: 'line';
	start: Point3DType;
	end: Point3DType;
	color: RGBType;
};

export type PointType = {
	type: 'point';
	location: Point3DType;
	color: RGBType;
	text: string;
};

export type MapType = LineType | PointType;

export const parseAsLine = (line: string): LineType => {
	const tokens = line.replaceAll(',', '').split(' ');
	if (tokens.length !== 10) {
		console.error('parseAsLine tokens.length !== 10');
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
		type: 'line',
		start,
		end,
		color
	};
};

export const parseAsPoint = (line: string): PointType => {
	const tokens = line.replaceAll(',', '').split(' ');
	if (tokens.length !== 9) {
		console.error('parseAsPoint tokens.length !== 10');
		throw new Error();
	}

	let location = Point3DSchema.parse({
		x: tokens[1],
		y: tokens[2],
		z: tokens[3]
	});

	const color = RGBSchema.parse({
		r: tokens[4],
		g: tokens[5],
		b: tokens[6]
	});

	const text = tokens[8];

	return {
		type: 'point',
		location,
		color,
		text
	};
};

export const parseMapFile = (file: string) => {
	const parse: MapType[] = [];
	file.split('\n').forEach((line: string) => {
		const split = line.split(' ');
		if (split.at(0) === 'L') parse.push(parseAsLine(line));
		else if (split.at(0) === 'P') parse.push(parseAsPoint(line));
	});
	return parse;
};

export type MinMax3D = {
	x: {
		min: number;
		max: number;
	};
	y: {
		min: number;
		max: number;
	};
	z: {
		min: number;
		max: number;
	};
};

export const minMaxMapFile = (data: MapType[]): MinMax3D => {
	if (data.length === 0) {
		return {
			x: { min: 0, max: 0 },
			y: { min: 0, max: 0 },
			z: { min: 0, max: 0 }
		};
	}

	if (data[0].type !== 'line')
		return {
			x: { min: 0, max: 0 },
			y: { min: 0, max: 0 },
			z: { min: 0, max: 0 }
		};

	let current = {
		x: {
			min: data[0].start.x,
			max: data[0].start.x
		},
		y: {
			min: data[0].start.y,
			max: data[0].start.y
		},
		z: {
			min: data[0].start.z,
			max: data[0].start.z
		}
	};

	for (let i = 0; i < data.length; i++) {
		const d = data[i];
		if (d.type === 'line') {
			if (d.start.x < current.x.min) current.x.min = d.start.x;
			if (d.start.x > current.x.max) current.x.max = d.start.x;

			if (d.start.y < current.y.min) current.y.min = d.start.y;
			if (d.start.y > current.y.max) current.y.max = d.start.y;

			if (d.start.z < current.z.min) current.z.min = d.start.z;
			if (d.start.z > current.z.max) current.z.max = d.start.z;

			if (d.end.x < current.x.min) current.x.min = d.end.x;
			if (d.end.x > current.x.max) current.x.max = d.end.x;

			if (d.end.y < current.y.min) current.y.min = d.end.y;
			if (d.end.y > current.y.max) current.y.max = d.end.y;

			if (d.end.z < current.z.min) current.z.min = d.end.z;
			if (d.end.z > current.z.max) current.z.max = d.end.z;
		}
	}

	return current;
};
