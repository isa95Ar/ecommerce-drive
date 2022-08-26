export const getProducts = async (page = 1) => {

    let products = await fetch(`/api/products/?page=${page}`).then((data) => data.json());

    return products;
};

export const getCategories = async () => {
    
    let categories = await fetch('/api/categories').then((data) => data.json());

    return categories;
}