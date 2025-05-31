export const useSortByKey = <T>(arr: T[], name: keyof T): T[] => {
	if (arr.length === 0 || !name) {
		return [];
	}

	const arrayForSort = [...arr];

	const sortedArr = arrayForSort.sort((a, b) => {
		if (a[name] > b[name]) {
			return 1;
		}
		if (a[name] < b[name]) {
			return -1;
		}
		return 0;
	});

	return sortedArr;
};
