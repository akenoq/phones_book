import React from 'react';
import {render} from 'react-dom';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import CountingBtn from "./CountingBtn";
import CountingInterval from "./CountingInterval";
import NotFound from "./NotFound";
import NavBar from "./NavBar";

function MainContent() {
    return (
        <Router>
            <div>
                <NavBar/>
                <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/btn" component={CountingBtn}/>
                <Route path="/inter" component={CountingInterval}/>
                <Route component={NotFound}/>
                </Switch>
            </div>
        </Router>
    )
}

render(<MainContent/>, document.getElementById('root'));