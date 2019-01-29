import React from 'react';
import {Link}  from 'react-router-dom';
import getIntervalContent from "./IntervalWorker";

export default function NavBar() {

    function stopInter() {
        getIntervalContent().clearIntervalCounter();
    }

    return (
        <div>
            <Link to="/" onClick={stopInter()}>Main Menu</Link><br/>
            <Link to="/btn" onClick={stopInter()}>Counter by Btn</Link><br/>
            <Link to="/inter" onClick={stopInter()}>Counter by Interval</Link><br/>
        </div>
    );
}
