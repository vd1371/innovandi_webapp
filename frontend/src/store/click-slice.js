import {createSlice} from "@reduxjs/toolkit"

const clickSlice = createSlice({
    name: 'clickedElement',
    initialState: {
        clickedElement : null,
        activeComponent: null,
        activeSection: "project",
        editableComponent: null,
        clickNotification: null,
        newComponentAdded: false,
    },
    reducers: {
        setActiveSection(state, action){
            if ((state.editableComponent === action.payload) ||
                (!state.editableComponent)){
                state.activeSection = action.payload
                state.clickNotification = null
            } else {
                state.clickNotification = "Set Active Section: Seems like you \
                                    have an unsaved edit. Please save first."
            }
        },
        setEditableComponent(state, action){
            if (!state.editableComponent){
                state.editableComponent = action.payload
            } else if (state.editableComponent === action.payload){                
                state.editableComponent = null
                state.clickNotification = null
            } else if (state.editableComponent !== action.payload){
                state.clickNotification = "Set Active Component: Seems like you\
                                     have an unsaved edit. Please save first."
            }
        },
        clearClickNotification(state){
            state.clickNotification = null
        },
        setActiveComponent(state, action){
            state.activeComponent = action.payload
        },
        setNewComponentAdded(state, action){
            if (state.newComponentAdded && action.payload){
                state.clickNotification = "An unused process is already added.\
                                            Please use that first"
            } else {
                state.newComponentAdded = action.payload
            }
        }
    }

})

export const clickActions = clickSlice.actions;
export default clickSlice;