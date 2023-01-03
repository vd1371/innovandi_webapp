import EditableCell from "features/LCCA/components/EditableCell";
import AddButton from "features/LCCA/components/AddButton";
import DeleteRowButton from "features/LCCA/components/DeleteRowButton";

import {useSelector, useDispatch} from "react-redux";
import { clickActions } from "store/click-slice";
import { appActions } from "store/app-slice";
import DropdownSelector from "features/LCCA/components/DropdownSelector";

export default function ProcSettCrushingFormula(props){

    const activeComponent = useSelector(state=>state.click.activeComponent)
    const editableComponent = useSelector(state=>state.click.editableComponent)
    const activeSection = useSelector(state=>state.click.activeSection)
    const nEditions = useSelector(state=>state.app.nEditions)
    const dispatch = useDispatch()

    //------------------------------ Formulas ------------------------------//
    const handleAddCrushingFormula = () => {
        props.projectObject.addCrushingFormulaToProcess(activeComponent)
        dispatch(appActions.addNEditions())
    }

    const handleSetCrushingFormula = (newValue, selectorProps) => {
        props.projectObject.setCrushingFormulaOfProcess(activeComponent,
                                            selectorProps.key_1,
                                            selectorProps.key_2,
                                            newValue)
    }

    const handleDeleteCrushingFormula = (key_1) => {
        props.projectObject.deleteCrushingFormulaOfProcess(activeComponent, key_1)
        dispatch(appActions.addNEditions())
    }
        
    let processInfo = props.projectObject.processes[activeComponent]

    return (
        <>
            {(activeSection === "process") && processInfo &&
            <>

            {(processInfo.processType === 'Crusher') &&

            <>
            <div className="top-pane-settings table-info">
                <p>Crushing Formula</p>
                <div className="filler"></div>
                <AddButton handler={handleAddCrushingFormula}/>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Ratio</th>
                        <th>Of Material</th>
                        <th>Converts To</th>
                        {(editableComponent === "process") && <th>Del.</th>}
                    </tr>
                </thead>
                <tbody>
                {
                Object.entries(processInfo.crushingFormula).map(([key, item]) => {
                
                    return (
                        <tr key = {"formulaRow" + key}>
                        <EditableCell
                            key = {"formulaPecentageCell" + key}
                            valueRef = {item.ratio}
                            handleNewValue = {handleSetCrushingFormula}
                            key_1 = {key}
                            key_2 = "ratio"
                            className = "left-column"
                            belongsTo = "process" />

                        <DropdownSelector
                            key = {"formulaOfMaterialCell" + key}
                            valueRef = {item.ofMaterial}
                            handleNewValue = {handleSetCrushingFormula}
                            key_1 = {key}
                            key_2 = "ofMaterial"
                            belongsTo = "process"
                            listOfValues = {props.projectObject.getWasteNames()}
                            />

                        <DropdownSelector
                            key = {"formulaConvertsToCell" + key}
                            valueRef = {item.convertsTo}
                            handleNewValue = {handleSetCrushingFormula}
                            key_1 = {key}
                            key_2 = "convertsTo"
                            belongsTo = "process"
                            listOfValues = {props.projectObject.getWasteNames()}
                            />

                        <DeleteRowButton
                            key = {"formulaDeleteKey" + key}
                            key_1 = {key}
                            handleDelete = {handleDeleteCrushingFormula}
                            belongsTo = "process"
                            />
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <br></br>
            </>
            }
            

            </>
            }
        </>
    )
}