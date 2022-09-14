import { useEffect, useState } from "react";
import { ProductCart } from "../global/types";

export function useCart() {
  const [cart, setCart] = useState({
    products: [],
    total: 0,
  });

  const sumTotals = (products: Array<ProductCart>): number => {
    let totalCart = 0;
    products.map((product) => (totalCart += product.total));
    return totalCart;
  };

  const addProduct = (product: ProductCart, qty: number) => {
    const productCart: ProductCart = {
      code: product.code,
      name: product.name,
      qty,
      price: product.price,
      minimum: product.minimum,
      total: product.price * qty,
      picture: product.picture
    };
    let products = cart.products;
    if (products.find((product) => product.code == productCart.code)) {
        
      products = products.map((cartProduct) => {
        if (cartProduct.code == productCart.code) {
          return productCart;
        } else {
          return cartProduct;
        }
      });
    } else {
      products.push(productCart);
    }

    updateProducts(products);
  };

  const removeProduct = (product: ProductCart) => {
    const products = cart.products.filter(
      (cartProduct) => cartProduct.code !== product.code
    );
    updateProducts(products);
  };

  const updateProducts = (products: Array<ProductCart>) => {
    setCart({ total: sumTotals(products), products });

    localStorage.setItem(
      "cart",
      JSON.stringify({ total: sumTotals(products), products })
    );
  };

  const removeCart = ():any => {
      setCart({
        products: [],
        total: 0,
      });
      localStorage.removeItem("cart");
  }

  useEffect(() => {
    const actualCart = localStorage.getItem("cart");
    if (actualCart) {
      setCart(JSON.parse(actualCart));
    }
  }, []);

  return {
    Cart: cart,
    addProduct,
    removeProduct,
    removeCart
  };
}
