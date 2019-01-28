import React from 'react';
import globalBus from "./globalBus";
import RecordsList from "./RecordsLIst";

const PAGE = 1;

const onRedirectToAdding = () => {
    globalBus().page.setCurrentPage(PAGE);
};

export default function PageShowingPhones() {
    return (
        <div>
            <p onClick={onRedirectToAdding}><u style={{color: 'blue'}}>Go to Adding</u></p>
            <br/>
            <br/>
            <RecordsList/>
        </div>
    )
}
