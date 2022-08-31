export const getProducts = async (page = 1, category = null) => {

    let url = '/api/products';
    if(category)
    {
        url += '/' + category;
    }
    let products = await fetch(`${url}?page=${page}`).then((data) => data.json());

    return products;
};

export const getCategories = async () => {
    
    let categories = await fetch('/api/categories').then((data) => data.json());

    return categories;
}

export const getCartStatus = async() => {
    
    let cartStatus = await fetch('/api/cart/status').then((data) => data.json());

    return cartStatus;
}