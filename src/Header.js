import React from 'react';

const styleObj = {
    color: '#533467',
    fontFamily: 'Arial'
};

export default function Header() {
    const headerContent = 'Phones book';
    return (
        <div>
            <h1 style={styleObj}>{headerContent}</h1>
        </div>
    );
}
