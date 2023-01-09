import { useTable } from 'react-table'
import Table from 'components/Table'
import { Tab } from 'react-tabs'

export default function ReportsTables(props){

    const columns = [{
        Header: "No.",
        accessor: "rowNumber"
        },
        {
        Header: "Process",
        accessor: "process"
    }]
    const allEmission = []
    const data = []

    for (const emission of props.projectObject.generalInfo.emissionTypes){
        columns.push({
            Header: emission,
            accessor: emission
        })
        allEmission.push(emission)
    }

    let rowNumber = 1
    for (const process in props.projectObject.results){
        const tableRow = {
            "process": props.projectObject.processes[process].processName,
            "rowNumber": rowNumber
        }
        let emissions = props.projectObject.results[process].emissions
        for (const emissionName in emissions){
            tableRow[emissionName] = emissions[emissionName]
        }
        data.push(tableRow)
        rowNumber ++;
    }

    return (
        <div>
            <h1 className='px-3 text-white'>Emissions</h1>
            <Table columns={columns} data={data} />
        </div>
        
    )
}