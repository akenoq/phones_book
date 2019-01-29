import React from 'react';
import LSworker from "./LSworker";
import RecordElement from "./RecordElement";

let keyCode = 0;

export default function RecordsList() {
    const arr = LSworker.getListFromBook();
    const tableArr = arr.map((elem, index) => {
        keyCode += 1;
        const keyString = "arr_key_" + keyCode;
        return (
            <RecordElement params={elem} key={keyString}/>
        );
    });

    return (
        <table>
            <tbody>
                <tr><th>Name</th><th>Phone</th></tr>
                {tableArr}
            </tbody>
        </table>
    )
}