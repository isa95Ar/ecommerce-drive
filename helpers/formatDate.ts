export function getDayFromDate(dateString: string) {
	const date = new Date(dateString);
	const day = date.getUTCDate();
	let formattedDay = day.toString();
	const month = date.getUTCMonth() + 1;
	let formattedMonth = month.toString();

	if (formattedDay.length === 1) {
		formattedDay = '0' + formattedDay;
	}
	if (formattedMonth.length === 1) {
		formattedMonth = '0' + formattedMonth;
	}

	return `${formattedDay}/${formattedMonth}`;
}

export function getTimeFromDate(dateString: string) {
	const date = new Date(dateString);
	let hours = date.getHours().toString();
	if (hours.length === 1) {
		hours = '0' + hours;
	}
	let minutes = date.getMinutes().toString();
	if (minutes.length === 1) {
		minutes = '0' + minutes;
	}
	return `${hours}:${minutes}`;
}
