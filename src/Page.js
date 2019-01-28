import React, {Component} from 'react';
import PageAddingPhones from "./PageAddingPhones";
import PageShowingPhones from "./PageShowingPhones";
import globalBus from "./globalBus";


export default class Page extends Component {

    constructor(props) {
        super(props);
        globalBus().page = this;

        this.state = {
            currentPage: 1
        }
    }

    setCurrentPage(pageNumber) {
        this.setState({
            currentPage: pageNumber
        })
    }

    render() {
        switch (this.state.currentPage) {
            case 1:
                return (
                    <div>
                        <PageAddingPhones/>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <PageShowingPhones/>
                    </div>
                );
            default:
                return (
                    <div/>
                );
        }
    }
}