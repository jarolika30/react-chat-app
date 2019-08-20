import React from 'react';
import './createMessage.css';

const CreateMessage = (props)=> {
    let nameRef = props.nickname;
    let textRef = null;

    function onSubmitFunc() {
        console.log('&#x1F440;');
        props.socket.send(JSON.stringify({from: nameRef.value, message: textRef.value }));
        textRef.value = '';
    }
    function saveNickName() {
        const myStorage = window.localStorage;
        myStorage.setItem('Nickname', nameRef.value);
    }
    return (
        <div className="create-message">
            <input type="text" className="input" id="input-name" defaultValue= { nameRef} placeholder="Input Your name" ref={ref => nameRef = ref}/>
            <input type="text" className="input" id="input-text" placeholder="Input Your message" ref={ref => textRef = ref}/>
            <button className="btn-submit" onClick={onSubmitFunc}>Send</button>
            <button className="btn-nick" onClick={saveNickName}>Save Nickname</button>
        </div>
    )
}

export default CreateMessage;