import React, { useState, useEffect, useContext} from "react";
import EditableCellTwoKeys from "./EditableCellTwoKeys";
import EditButton from "../EditButton";
import AddButton from "./AddButton";

import {useSelector, useDispatch} from "react-redux";
import { clickActions } from "../../../store/click-slice";
import uuid from "react-uuid";

export default function ConstructionWasteSection(props){

    const activeComponent = useSelector(state=>state.click.activeComponent)
    const editableComponent = useSelector(state=>state.click.editableComponent)
    const activeSection = useSelector(state=>state.click.activeSection)
    const dispatch = useDispatch()

    const [nWastes, setNWastes] = useState(0)
    const [contents, setContents] = useState()

    useEffect (() => {
        handleContents()
    }, [editableComponent, nWastes, activeSection])

    const handleAddWaste = () => {
        let obj = props.projectObject.constructionWasteComposition
        if (Object.keys(obj).length < 10) {
            props.projectObject.addWaste()
            setNWastes(Object.keys(obj).length)
        } else {
            dispatch(clickActions.setClickNotification(
                    "Currently, maximum number of types of wastes is 10"))
        }
    }

    const setWasteInfo = (key_1, key_2, newValue) => {
        props.projectObject.constructionWasteComposition[key_1][key_2] = newValue
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
                        </tr>
                    </thead>
                    <tbody key = {uuid()}>
                        {
                        Object.entries(props
                                        .projectObject
                                        .constructionWasteComposition)
                                        .map(([key, item]) => {
                        
                            return (
                                <tr key = {uuid()}>
                                    <EditableCellTwoKeys
                                        key = {uuid()}
                                        valueRef = {item.name}
                                        handleNewValue = {setWasteInfo}
                                        key_1 = {key}
                                        key_2 = "name"
                                        className = "left-column"
                                        belongsTo = "waste"/>
                                    <EditableCellTwoKeys
                                        key = {uuid()}
                                        valueRef = {item.value}
                                        handleNewValue = {setWasteInfo}
                                        key_1 = {key}
                                        key_2 = {"value"}
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
        <div id='construction-waste-section'>
            {contents}
        </div>
    )
}