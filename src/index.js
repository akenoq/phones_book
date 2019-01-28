import React from 'react';
import {render} from 'react-dom';
import Header from "./Header";
import Author from "./Author";
import Page from "./Page";
import LSworker from "./LSworker";

LSworker.initStore();

const author = {
    firstName: 'Nina',
    secondName: 'Kuklina'
};

function MainContent() {
    return (
        <div>
            <Header/>
            <Author params={author}/>
            <Page/>
        </div>
    )
}

render(<MainContent/>, document.getElementById('root'));