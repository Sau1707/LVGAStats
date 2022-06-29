export function getDayTransactionCount(dataJson) {
	let transaction = {};
	let date1 = new Date(dataJson); // start from the first element day
	dataJson.map((e, i) => {
		let date2 = new Date(e.data); // current transaction day
		if (
			//check if still in the same day
			date1.getFullYear() === date2.getFullYear() &&
			date1.getMonth() === date2.getMonth() &&
			date1.getDate() === date2.getDate()
		) {
			let index = `${date1.getFullYear()}-${
				date1.getMonth() + 1
			}-${date1.getDate()}`;
			if (transaction[index]) transaction[index] += 1;
			else transaction[index] = 1;
		} else {
			date1 = new Date(dataJson[i + 1].data); // get the next element
		}
	});

	const values = Object.values(transaction);
	const minTransaction = Math.min(values);
	const maxTransaction = Math.max(values);
	const avregeTransaction = values.reduce((a, b) => a + b, 0) / values.length;
	return {
		min: parseInt(minTransaction),
		max: parseInt(maxTransaction),
		avrege: parseInt(avregeTransaction),
	};
}
