import {configureStore, createSlice} from '@reduxjs/toolkit';
import authSlice from './auth-slice';


const clickSlice = createSlice({
    name: 'clickedElement',
    initialState: {clickedElement : null},
    reducers: {
        handleClickedElement(state, action){
            state.clickedElement = action.payload
            console.log(state.clickedElement)
        }
    }

})

export const actions = clickSlice.actions;
const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        click: clickSlice.reducer}
})

export default store;