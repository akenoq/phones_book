import React from 'react';

const styleTable = {
    padding: '10px'
};

export default function RecordElement(props) {
    const {params} = props;

    return (
        <tr>
            <td style={styleTable}>
                {params.recordName}
            </td>
            <td style={styleTable}>
                {params.recordPhone}
            </td>
        </tr>
    )
}