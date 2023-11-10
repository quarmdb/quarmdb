import type { PlayerClassExpType } from './races';

export const getExpModifier = (level: number) => {
	if (level <= 29) return 1.0;
	else if (level <= 34) return 1.1;
	else if (level <= 39) return 1.2;
	else if (level <= 44) return 1.3;
	else if (level <= 50) return 1.4;
	else if (level === 51) return 1.5;
	else if (level === 52) return 1.6;
	else if (level === 53) return 1.7;
	else if (level === 54) return 1.9;
	else if (level === 55) return 2.1;
	else if (level === 56) return 2.3;
	else if (level === 57) return 2.5;
	else if (level === 58) return 2.7;
	else if (level === 59) return 3.0;
	else if (level === 60) return 3.1;
	else if (level === 61) return 3.3;
	else if (level === 62) return 3.5;
	else if (level === 63) return 3.7;
	else if (level === 64) return 3.9;
	else return 4.1;
};

export const getBaseExp = (level: number) => {
	return level ** 3;
};

export const getExpForLevel = (
	level: number,
	playerClass: PlayerClassExpType
) => {
	return Math.floor(
		getBaseExp(level) * getExpModifier(level) * playerClass.mod
	);
};
