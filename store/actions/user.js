import { destroyCookie, setCookie } from 'nookies';

import { LOGOUT, SET_USER } from '../constants/actionTypes';

export const setUser = (user, remember) => {
  if (remember !== undefined) {
    setCookie(null, 'token', user.token, {
      path: '/',
      maxAge: remember ? 30 * 12 * 24 * 60 * 60 : 3600 // 1 year or 1hr
    });
  }

  return {
    type: SET_USER,
    user
  };
};

export const updateUser = user => ({
  type: SET_USER,
  user
});

export const logout = () => {
  destroyCookie(null, 'token', {
    path: '/'
  });

  return {
    type: LOGOUT
  };
};
