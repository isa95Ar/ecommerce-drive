import React, { useEffect, useState } from "react";
import ProductCard from "../components/cards/ProductCard";
import { getProducts } from "../helpers/content";

export default function Products() {
  const [products, setProducts] = useState();
  const init = async () => {
    let products = await getProducts();
    setProducts(products);
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <>
      {products.map((item) => {
        return item.stock && <ProductCard item={item} key={item.code} />;
      })}
    </>
  );
}
