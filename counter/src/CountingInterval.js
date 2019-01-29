import React, {Component} from 'react';
import LabelCounter from "./LabelCounter";
import getIntervalContent from "./IntervalWorker";
import globalBus from "./globalBus";

export default class CountingInterval extends Component {
    constructor(props) {
        super(props);
        globalBus().countingIntervalRender = this;

        this.state = {
            value: 0
        };

        getIntervalContent().setIntervalCounter();
    }

    getValue() {
        return this.state.value;
    };

    setValue(value) {
        this.setState({
            value: value
        })
    }

    render() {
        console.log('counter page render');
        if (getIntervalContent().inter === null) {
            getIntervalContent().setIntervalCounter();
        }
        return (
            <div>
                Interval
                <LabelCounter params={{value: this.getValue()}}/>
            </div>
        );
    }
}
