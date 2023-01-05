import Plot from 'react-plotly.js';

export default function EmissionsBarChart(props){
    
    const emissionsForPlotting = {}

    for (const emissionType of props.projectObject.generalInfo.emissionTypes){
        emissionsForPlotting[emissionType] = {
            "x": [],
            "y": []
        }
        for (const process in props.projectObject.results){
            emissionsForPlotting[emissionType]['x'].push(
                props.projectObject.processes[process].processName
            )
            emissionsForPlotting[emissionType]['y'].push(
                props.projectObject.results[process]["emissions"][emissionType]
            )
        }
    }

    return (
        <div className='all-plots-container'>
            {Object.entries(emissionsForPlotting).map(([key, item]) => {
                return (
                    <div className='one-plot-container'>
                        <Plot
                            data={[
                            {type: 'bar',
                                x: item['x'],
                                y: item['y']
                            },
                            ]}
                            layout={ {width: 720, height: 400, title: key} }
                        />
                    </div>
                )
            })}
        </div>
        
    )
}