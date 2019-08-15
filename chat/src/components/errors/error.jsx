import React from 'react';
import  './errors.css';

const Error = (props) => {
    return (
        <div className="error">
           { props.text_error }
        </div>
    )
}

export default Error;