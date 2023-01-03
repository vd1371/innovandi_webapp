import EditButton from "features/LCCA/components/EditButton";

import {useSelector, useDispatch} from "react-redux";
import { clickActions } from "store/click-slice";
import { appActions } from "store/app-slice";


export default function ProcSettToppane(props){

    const activeComponent = useSelector(state=>state.click.activeComponent)
    const editableComponent = useSelector(state=>state.click.editableComponent)
    const activeSection = useSelector(state=>state.click.activeSection)
    const nEditions = useSelector(state=>state.app.nEditions)
    const dispatch = useDispatch()

    const handleClickEditButton = () => {
        dispatch(clickActions.setEditableComponent("process"))
        dispatch(appActions.addNEditions())
    }
        
    let processInfo = props.projectObject.processes[activeComponent]
    
    return (
        <div className="top-pane-settings"
            onClick={()=>dispatch(clickActions.setActiveSection("process"))}>

            <h6 className={(activeSection === "process") ? null: 'inactive-section'}>Process Settings</h6>
            <div className="filler"></div>
            {processInfo &&
            <EditButton
            targetComponent={'process'}
            handleClick = {handleClickEditButton}/>}
        </div>
    )
}