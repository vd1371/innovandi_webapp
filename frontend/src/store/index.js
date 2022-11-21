import {configureStore, createSlice} from '@reduxjs/toolkit';
import authSlice from './auth-slice';
import clickSlice from './click-slice';
import appSlice from './app-slice';

export const actions = clickSlice.actions;
const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        click: clickSlice.reducer,
        app: appSlice.reducer}
})

export default store;