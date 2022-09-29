import { Fetch } from '../src/hooks/fetchHook';

export const getProducts = async (page = 1, category = null) => {
	return await Fetch<{ page: Number }>({ url: `/api/products${category ? `/${category}` : ''}`, query: { page } });
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
