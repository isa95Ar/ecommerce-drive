export const getProducts = async (page = null) => {

    let products = await fetch(`/api/products${page ? `?page=`+page : ``}`).then((data) => data.json());

    return products;
};
