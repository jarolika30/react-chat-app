import React from 'react';
import './createMessage.css';

const CreateMessage = () => {
    return (
        <div className="create-message">
            <input type="text" className="input" placeholder="Input Your name"/>
            <input type="text" className="input" placeholder="Input Your message"/>
            <button className="btn-submit">Send</button>
        </div>
    )
}

export default CreateMessage;