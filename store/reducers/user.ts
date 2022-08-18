import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppState} from "../store";

export interface UserState {
    id_google_sheet: number,
    name: string,
    email: string,
    profile_picture: string,
    logged : boolean
}

const initialState: UserState = {
    id_google_sheet: 0,
    name: '',
    email: '',
    profile_picture: '',
    logged : false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state,action:PayloadAction<UserState>) =>  action.payload,
        logout: () => initialState
    }
});

export const {login,logout} = userSlice.actions;

export const userLogged = (state: AppState) => state.user;


export default userSlice.reducer;