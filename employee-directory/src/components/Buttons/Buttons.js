import React from 'react';

export default function Buttons() {
    const style = {
        textAlign: 'center',
        margin: '10px'
    }

    const margins = {
        margin: '10px'
    }

    return (
        <div style={style}>
        <button style={margins} type="button" class="btn btn-success">All</button>
        <button style={margins} type="button" class="btn btn-success">Engineering</button>
        <button style={margins} type="button" class="btn btn-success">Marketting</button>
        <button style={margins} type="button" class="btn btn-success">Years of Service</button>
        </div>
    )
}