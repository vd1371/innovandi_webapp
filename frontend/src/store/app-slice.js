import {createSlice} from "@reduxjs/toolkit"

const appSlice = createSlice({
    name: 'app',
    initialState: {
        nProcesses: 0,
        nEditions: 0,
        nEditionsForDropDownSelector: 0,
        nEditionsArrows: 0,
        appLoadingShow: true,
        appLoadingWaiting: true,
    },
    reducers: {
        updateNProcesses(state, action){ state.nProcesses = action.payload },
        addNEditions (state) {state.nEditions += 1},
        addNEditionsDDS (state) {state.nEditionsForDropDownSelector += 1},
        addNEditionsArrows (state) {state.nEditionsArrows += 1},

        setAppLoading (state, action) {
            state.appLoadingShow = action.payload
            state.appLoadingWaiting = action.payload
        },

        setAppLoadingShow (state, action){
            state.appLoadingShow = action.payload
        },
        
        setAppLoadingWaiting (state, action){
            state.appLoadingWaiting = action.payload
        }
    }

})

export const appActions = appSlice.actions;
export default appSlice;