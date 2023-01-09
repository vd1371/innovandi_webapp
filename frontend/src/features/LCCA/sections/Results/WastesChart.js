import Plot from 'react-plotly.js';

export default function WastesChart(props){
    
    const wastesForPlotting = {}
    for (const proc_k in props.projectObject.processes){
        let process = props.projectObject.processes[proc_k]
        if (process.processType ===  "Dump"){
            wastesForPlotting[process.processName] = {
                "x": [],
                "y": []
            }

            if (props.projectObject.results !== undefined){
                for (const k in props.projectObject.results[proc_k]["waste"]){
                    wastesForPlotting[process.processName]["x"].push(
                        k
                    )
                    wastesForPlotting[process.processName]["y"].push(
                        props.projectObject.results[proc_k]["waste"][k]
                    )
                }
            }
        }
    }

    return (
        <div className='all-plots-container'>
            {Object.entries(wastesForPlotting).map(([key, item]) => {
                return (
                    <div
                        key = {"waste-plot-" + key} 
                        className='one-plot-container'>
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