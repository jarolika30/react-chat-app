import React from 'react';
import './turn.css';

const Turn = (props) => {
    const cl = props.turnColor === "red" ? "red" : "green";
    return (
        <div className="turn"><i className={`fas fa-wifi ${cl}`} ></i> </div>
    )
}

export default Turn;
