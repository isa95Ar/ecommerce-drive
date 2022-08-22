export const getProducts = async () => {

    let products = await fetch("/api/products").then((data) => data.json());

    return products;
};
