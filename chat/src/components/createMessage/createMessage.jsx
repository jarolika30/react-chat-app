import React from 'react';
import './createMessage.css';

const CreateMessage = (props)=> {
    let nameRef = null;
    let textRef = null;
    function onSubmitFunc() {
        props.socket.send(JSON.stringify({from: nameRef.value, message: textRef.value }));
        textRef.value = '';
    }
    return (
        <div className="create-message">
            <input type="text" className="input" id="input-name" placeholder="Input Your name" ref={ref => nameRef = ref}/>
            <input type="text" className="input" id="input-text" placeholder="Input Your message" ref={ref => textRef = ref}/>
            <button className="btn-submit" onClick={onSubmitFunc}>Send</button>
        </div>
    )
}

export default CreateMessage;