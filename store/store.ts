import {configureStore} from '@reduxjs/toolkit';

import userReducer from './reducers/user';
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export function makeStore() {
    return configureStore({
        reducer: {user: userReducer},
    })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;


export default store;