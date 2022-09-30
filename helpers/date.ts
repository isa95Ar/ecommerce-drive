/* Formating Date*/
export const formatDate = (date: Date) => {
    date.setSeconds(0,0);
    return date.toISOString().replace(/:00.\d+Z$/g, "");
};

/* Function to get Close Date*/
export const getMinCloseDate = (date: string) => {
	if (!date) {
		return '';
	}
	let minDate = new Date(date);
	minDate.setDate(minDate.getDate() + 1);
	return formatDate(minDate);
};
