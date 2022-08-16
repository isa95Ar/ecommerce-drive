import { SET_CART_PRODUCTS } from '../constants/actionTypes';

const initialState = {
  products: {}
};

export default function cart(state = initialState, action) {
  switch (action.type) {
    case SET_CART_PRODUCTS:
      return { ...state, products: action.products };

    default:
      return state;
  }
}
