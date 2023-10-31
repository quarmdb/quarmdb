export const dbDateSplit = (dbFileName: string) => {
	dbFileName = dbFileName.slice(0, -7);
	dbFileName =
		(dbFileName.split('_').at(1) || '') + (dbFileName.split('_').at(2) || '');
	const split = dbFileName.split('-');
	return {
		year: split.at(0),
		month: split.at(1),
		day: split.at(2),
		hour: (split.at(3) || '00').slice(0, 2),
		minute: (split.at(3) || '00').slice(2)
	};
};
