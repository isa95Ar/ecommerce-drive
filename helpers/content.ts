import { Fetch } from '../src/hooks/fetchHook';

export const getProducts = async (page = 1, category = '', search = '') => {
	return await Fetch<{ category: String; search: String; page: Number }>({
		url: `/api/products`,
		query: { category, search, page }
	});
};

export const getCategories = async () => {
	return await Fetch({ url: '/api/categories' });
};

export const getCartStatus = async () => {
	return await Fetch({ url: '/api/cart/status' });
};

export const getOrdersToPost = async () => {
	return await Fetch({ url: '/api/admin/orders/to-post' });
};
