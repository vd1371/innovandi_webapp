import processClass from "../processClass"

export default function _defaultWasteProcess() {
    const processes = {}
    processes["wasteComponent"] = new processClass("wasteComponent")
    return processes
}