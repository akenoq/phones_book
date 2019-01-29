import React from 'react';

export default function Author(props) {
    const {params} = props;

    return (
        <div>
            <i>Author: {params['firstName']} {params['secondName']}</i>
        </div>
    );
}
