import React, { useState, useEffect, useContext} from "react";
import EditableCellTwoKeys from "./EditableCellTwoKeys";
import EditButton from "../EditButton";
import AddButton from "./AddButton";

export default function ConstructionWasteSection(props){

    const [editable, setEditable] = useState(false)
    const [nWastes, setNWastes] = useState(0)
    const [contents, setContents] = useState()

    useEffect (() => {
        handleContents()
    }, [editable, nWastes, props.activeSection])

    const handleEditable = () => {setEditable(!editable)}

    const handleAddWaste = () => {

        let obj = props.constructionWasteComposition

        if (Object.keys(obj).length < 10) {
            obj[Object.keys(obj).length + 1] = {
                'name': 'N/A',
                'value': 0
            } 
            setNWastes(Object.keys(obj).length)
        } else {
            alert("Currently, maximum number of types of wastes is 10")
        }
    }

    const setWasteInfo = (key_1, key_2, newValue) => {
        props.constructionWasteComposition[key_1][key_2] = newValue
    }

    const handleContents = () => {
        setContents(
            <>
                <div className="top-pane-settings"
                    onClick={() => props.setActiveSection("waste")}>
                    <h6 className={(props.activeSection === "waste") ? null: 'inactive-section'}>Waste Components</h6>
                    <div className="filler"></div>
                    <AddButton handler={handleAddWaste}/>
                    <EditButton
                        editable={editable}
                        handleEditable={handleEditable}/>
                </div>

                {(props.activeSection === "waste") &&
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Amount/Hour</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            Object.entries(props.constructionWasteComposition).map(([key, item]) => {
                            
                                return (
                                    <tr>
                                    <EditableCellTwoKeys
                                        valueRef = {item.name}
                                        handleNewValue = {setWasteInfo}
                                        key_1 = {key}
                                        key_2 = {"name"}
                                        className = {"left-column"}
                                        editable = {editable} />
                                    <EditableCellTwoKeys
                                        valueRef = {item.value}
                                        handleNewValue = {setWasteInfo}
                                        key_1 = {key}
                                        key_2 = {"value"}
                                        editable = {editable} />
                                    </tr>
                                )
                            })
                            }
                            
                        </tbody>
                    </table>
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