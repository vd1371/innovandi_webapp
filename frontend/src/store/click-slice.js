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
        arrowStartingProcess: null,
        arrowStartingPoint: null,
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
        setClickNotification(state, action){
            state.clickNotification = action.payload
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
        },
        setArrowPointInfo(state, action){
            let processParentOfPoint = action.payload[0]
            let pointId = action.payload[1]

            if (!state.arrowStartingPoint && !state.arrowStartingProcess){
                state.arrowStartingProcess = processParentOfPoint
                state.arrowStartingPoint = pointId

            } else if (state.arrowStartingPoint && state.arrowStartingProcess){
                if ((state.arrowStartingPoint !== pointId) &&
                        (state.arrowStartingProcess === processParentOfPoint)){
                    state.clickNotification = "Both start and end of an arrow \
                                            cannot belong to the same process."
                } else if (processParentOfPoint.includes("wasteComponent")){
                    state.clickNotification = "A flow cannot end at the waste component"
                }
                
                state.arrowStartingProcess = null
                state.arrowStartingPoint = null

            } else {
                console.log(state.arrowStartingPoint)
                console.log(state.arrowStartingProcess)
                console.log("setArrowInfo: Something's wrong")
            }
        },
    }

})

export const clickActions = clickSlice.actions;
export default clickSlice;