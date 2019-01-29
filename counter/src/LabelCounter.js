import React from 'react';

export default function LabelCounter(props) {

    const {params} = props;

    return (
        <h3 style={{color: 'green'}}>
            {params.value}
        </h3>
    )
}
