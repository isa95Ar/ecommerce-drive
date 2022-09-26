export const slugify = function (str) {
	var from = 'ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç',
		to = 'AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc',
		mapping = {};
	for (let i = 0, j = from.length; i < j; i++) mapping[from.charAt(i)] = to.charAt(i);
	const result = [];
	for (let i = 0, j = str.length; i < j; i++) {
		const c = str.charAt(i);
		if (mapping.hasOwnProperty(str.charAt(i))) result.push(mapping[c]);
		else result.push(c);
	}
	return result
		.join('')
		.replace(/[^-A-Za-z0-9]+/g, '-')
		.toLowerCase();
};
