type fetchData<T> = {
	url: string;
	method?: string;
	data?: T;
	query?: T;
	onSuccess(response: any): void;
	onError(error: any): void;
};

export function Fetch<T>({ url, method = 'GET', data, query, onSuccess, onError }: fetchData<T>) {
	const serializeToString = (q: typeof query): string => {
		let qs: string = '?';
		Object.keys(q).map(field => (qs += `${encodeURIComponent(field)}=${encodeURIComponent(q[field])}&`));

		return `?${qs.slice(0, -1)}`;
	};
	const buildedUrl = `${url}${query && Object.keys(query).length > 0 ? serializeToString(query) : ''}`;

	fetch(buildedUrl, {
		method,
		...(data && { body: JSON.stringify(data) })
	})
		.then(async res => {
			const response = await res.json();
			onSuccess(response);
		})
		.catch(e => onError(e));
}
