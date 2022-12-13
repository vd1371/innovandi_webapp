
import _cloneWasteComposition from './_cloneWasteComposition';
import _initializeResultsObject from './_initializeResultsObject';
import _handleCalculatingWasteFlow from './_handleCalculatingWasteFlow';
import _handleCalculatingEmissions from './_handleCalculatingEmissions';

export default function _runLCAAnalysis(obj){
    console.log("Trying to run LCA Analysis")
    const wasteComposition = _cloneWasteComposition(obj)
    const results = _initializeResultsObject(obj, wasteComposition)

    const isSuccessful = _handleCalculatingWasteFlow(obj, results, wasteComposition)
    _handleCalculatingEmissions(obj, results)

    obj.results = results

    return isSuccessful
}