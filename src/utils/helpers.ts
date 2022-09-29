/* Formating Date*/
export const formatDate = (date: Date) => date.toLocaleString();

/* Function to get Close Date*/
export const getMinCloseDate = (date: string) => {
	if (!date) {
		return '';
	}
	let minDate = new Date(date);
	minDate.setDate(minDate.getDate() + 1);
	return formatDate(minDate);
};
