import React, {Component} from 'react';
import LabelCounter from "./LabelCounter";

export default class CountingBtn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
        console.log('CountingBtn')
    }

    incValState = () => {
        let val = this.state.value + 1;
        this.setState({
            value: val
        })
    };

    getValState() {
        return this.state.value;
    }

    render() {
        return (
            <div>
                <button onClick={this.incValState}>Count</button>
                <LabelCounter params={{value: this.getValState()}}/>
            </div>
        );
    }
}
