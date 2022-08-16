import { LOGOUT, SET_USER } from '../constants/actionTypes';

const initialState = {
  id: null,
  token: null,
  name: null,
  picture: null
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.user };

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
}
