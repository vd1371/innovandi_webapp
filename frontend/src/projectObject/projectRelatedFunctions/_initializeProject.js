import _defaultWasteProcess from "./_defaultWasteProcess"

export default function _initializeProject(obj){
    obj.projectInfo = {
        projectName: "MyAwesomeProject",
        workingHours: 0,
        workingDaysPerYear: 0
    }
    obj.wasteComposition = {}
    obj.processes = _defaultWasteProcess()
    obj.flows= {}
    obj.renderSettings = {
        scaleLevel: 1,
    }
    obj.generalInfo = {
        processesTypes : ['Excavator', 'Loader', 'Feeder',
                            'Crusher', 'Separator', 'ConveyorBelt',
                            'Sieve', 'AirClassifier', "Dump",
                            "HandPicking"],
        inputTypes : ["Electricity", "Gasoline", "Water"],
        emissionTypes : ["CO2", "N2O", "CH4"]
    }
}