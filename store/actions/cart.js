import { destroyCookie, setCookie } from 'nookies';

import { SET_CART_PRODUCTS } from '../constants/actionTypes';

export const setCartProducts = products => ({
  type: SET_CART_PRODUCTS,
  products
});

export const setCartQuantity = (productId, qty) => {
  return (dispatch, getState) => {
    const { products } = getState().cart;
    let newProducts = { ...products };
    newProducts[productId] = qty;
    setCookie(null, 'cart', JSON.stringify(newProducts), {
      path: '/',
      maxAge: 30 * 12 * 24 * 60 * 60 // 1 year
    });
    dispatch(setCartProducts(newProducts));
  };
};

export const increaseCart = (productId, qty) => {
  return (dispatch, getState) => {
    const { products } = getState().cart;
    let newProducts = { ...products };

    if (newProducts.hasOwnProperty(productId)) {
      newProducts[productId] = parseInt(newProducts[productId], 10) + qty;
    } else {
      newProducts[productId] = qty;
    }

    setCookie(null, 'cart', JSON.stringify(newProducts), {
      path: '/',
      maxAge: 30 * 12 * 24 * 60 * 60 // 1 year
    });
    dispatch(setCartProducts(newProducts));
  };
};

export const decreaseCart = (productId, qty) => {
  return (dispatch, getState) => {
    const { products } = getState().cart;
    let newProducts = { ...products };

    if (newProducts.hasOwnProperty(productId)) {
      newProducts[productId] = newProducts[productId] - qty;

      if (newProducts[productId] <= 0) {
        delete newProducts[productId];
      }

      setCookie(null, 'cart', JSON.stringify(newProducts), {
        path: '/',
        maxAge: 30 * 12 * 24 * 60 * 60 // 1 year
      });
      dispatch(setCartProducts(newProducts));
    }
  };
};
