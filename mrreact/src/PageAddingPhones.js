import React, {Component} from 'react';
import globalBus from "./globalBus";
import LSworker from "./LSworker";

const PAGE = 2;

export default class PageAddingPhones extends Component {

    constructor(props) {
        super(props);
        globalBus().pageAddingPhones = this;

        this.state = {
            recordName: '',
            recordPhone: ''
        }
    }

    onChangeRecordName = (event) => {
        this.setState({
            recordName: event.target.value
        });
    };

    onChangeRecordPhone = (event) => {
        this.setState({
            recordPhone: event.target.value
        });
    };

    onAddBtnClick = () => {
        LSworker.addRecordToBook(
            this.state.recordName,
            this.state.recordPhone
        );
        this.setState({
            recordName: '',
            recordPhone: ''
        })
    };

    onRedirectToList = () => {
        globalBus().page.setCurrentPage(PAGE);
    };

    render() {
        return (
            <div>
                <div>
                    <label>Name </label>
                    <input type="text" value={this.state.recordName}
                           onChange={this.onChangeRecordName}/>
                </div>
                <div>
                    <label>Phone </label>
                    <input type="text" value={this.state.recordPhone}
                           onChange={this.onChangeRecordPhone}/>
                </div>
                <button onClick={this.onAddBtnClick}>Add record</button>
                <p onClick={this.onRedirectToList}><u style={{color: 'blue'}}>Go to List</u></p>
            </div>
        );
    }
}