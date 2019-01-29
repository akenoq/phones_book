import globalBus from "./globalBus";

let counterVal = 0;
let inter = null;

function setIntervalCounter() {
    counterVal = 0;
    inter = setInterval(() => {
        counterVal += 1;
        globalBus().countingIntervalRender.setValue(counterVal);
        console.log(counterVal);
    }, 500);
}

function clearIntervalCounter() {
    clearInterval(inter);
    inter = null;
    counterVal = 0;
}

export default function getIntervalContent() {
    return {
        counterVal: counterVal,
        setIntervalCounter: setIntervalCounter,
        clearIntervalCounter: clearIntervalCounter,
        inter: inter
    }
}
