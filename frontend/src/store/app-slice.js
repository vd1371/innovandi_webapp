import {createSlice} from "@reduxjs/toolkit"

const appSlice = createSlice({
    name: 'app',
    initialState: {
        nProcesses: 0,
    },
    reducers: {
        updateNProcesses(state, action){
            state.nProcesses = action.payload
        }

    }

})

export const appActions = appSlice.actions;
export default appSlice;