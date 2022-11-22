import {createSlice} from "@reduxjs/toolkit"

const appSlice = createSlice({
    name: 'app',
    initialState: {
        nProcesses: 0,
        scaleLevel: 1.2,
    },
    reducers: {
        updateNProcesses(state, action){
            state.nProcesses = action.payload
        },
        modifyScalelevel(state, action){
            state.scaleLevel += action.payload
        }

    }

})

export const appActions = appSlice.actions;
export default appSlice;