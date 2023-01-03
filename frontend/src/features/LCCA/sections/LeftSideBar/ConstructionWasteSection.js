import React, { useState, useEffect, useContext} from "react";

import {useSelector, useDispatch} from "react-redux";
import { clickActions } from "store/click-slice";
import { appActions } from "store/app-slice";


import EditableCell from "features/LCCA/components/EditableCell";
import EditButton from "features/LCCA/components/EditButton";
import AddButton from "features/LCCA/components/AddButton";
import DeleteRowButton from "features/LCCA/components/DeleteRowButton";

export default function ConstructionWasteSection(props){

    const editableComponent = useSelector(state=>state.click.editableComponent)
    const activeSection = useSelector(state=>state.click.activeSection)
    const nEditions =  useSelector(state=>state.app.nEditions)
    const dispatch = useDispatch()

    const [contents, setContents] = useState()

    useEffect (() => {
        handleContents()
    }, [editableComponent, activeSection, nEditions])

    const handleAddWaste = () => {
        props.projectObject.addWaste()
        dispatch(appActions.addNEditions())
    }

    const handleDeleteWaste = (key_1) => {
        props.projectObject.deleteWaste(key_1)
        dispatch(appActions.addNEditions())
    }

    const setWasteInfo = (newValue, cellProps) => {
        props.projectObject.wasteComposition[cellProps.key_1][cellProps.key_2] = newValue
    }

    const handleContents = () => {
        setContents(
            <>
            <div className="top-pane-settings"
                onClick={()=>dispatch(clickActions.setActiveSection("waste"))}>
                <h6 className={(activeSection === "waste") ? null: 'inactive-section'}>Waste Composition</h6>
                <div className="filler"></div>
                <AddButton handler={handleAddWaste}/>
                <EditButton
                    targetComponent={'waste'}
                    handleClick = {()=>dispatch(clickActions.setEditableComponent("waste"))}/>
            </div>

            {(activeSection === "waste") &&
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Percentage (%)</th>
                            {(editableComponent === "waste") && <th>Del.</th>}
                        </tr>
                    </thead>
                    <tbody key = {"wasteTable"}>
                        {
                        Object.entries(props
                                        .projectObject
                                        .wasteComposition)
                                        .map(([key, item]) => {
                        
                            return (
                                <tr key = {"wasteRow" + key}>
                                    <EditableCell
                                        key = {"wasteName" + key}
                                        valueRef = {item.name}
                                        handleNewValue = {setWasteInfo}
                                        key_1 = {key}
                                        key_2 = "name"
                                        className = "left-column"
                                        belongsTo = "waste"/>

                                    <EditableCell
                                        key = {"wasteValue" + key}
                                        valueRef = {item.value}
                                        handleNewValue = {setWasteInfo}
                                        key_1 = {key}
                                        key_2 = {"value"}
                                        belongsTo = "waste" />

                                    <DeleteRowButton
                                        key = {"wasteDeleteKey" + key}
                                        key_1 = {key}
                                        handleDelete = {handleDeleteWaste}
                                        belongsTo = "waste" />
                                </tr>
                            )
                        })
                        }
                        
                    </tbody>
                </table>
                {(activeSection === "waste") &&
                <p className={'inactive-section'}>
                    If sum of the percentages is not 100,
                    they will be normalized automatically.
                </p>
                }
            </div>
            }
            
            </>
        )
    }
    
    return (
        <div
            className="settings-wrapper"
            id='construction-waste-section'>
            {contents}
        </div>
    )
}