import React, {useState, useEffect, useRef} from "react";
import {useSelector, useDispatch} from "react-redux";

import EmissionsBarChart from "./EmissionsBarChart";

import {
    MDBContainer,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBInput,
    MDBCheckbox
}
from 'mdb-react-ui-kit';
import WastesChart from "./WastesChart";

export default function Results(props){

    const [justifyActive, setJustifyActive] = useState('tab1');

    const nProcesses = useSelector(state=>state.app.nProcesses)
    const nEditions = useSelector(state=>state.app.nEditions)
    const dispatch = useDispatch()

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }
        setJustifyActive(value);
        };
    
    return (
        <>
        <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
            <MDBTabsItem>
                <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                Emissions
                </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
                <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                Wastes
                </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
                <MDBTabsLink onClick={() => handleJustifyClick('tab3')} active={justifyActive === 'tab3'}>
                Reports
                </MDBTabsLink>
            </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>

            <MDBTabsPane show={justifyActive === 'tab1'}>
                <EmissionsBarChart {...props}/>
            </MDBTabsPane>

            <MDBTabsPane show={justifyActive === 'tab2'}>
                <WastesChart {...props} />
            </MDBTabsPane>

            <MDBTabsPane show={justifyActive === 'tab3'}>
                <h1 className="text-light">Reports will be shown here</h1>
            </MDBTabsPane>

        </MDBTabsContent>

        </>
    )
}