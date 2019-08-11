import React from 'react';
import './chatArea.css';

const ChatArea = (props) => {
    return (
        <div className="chat">
            { props.messages ? props.messages.map(message => {
                    return (
                            <div className="message" key={message.id}>
                                <p>{`${new Date(message.time).toLocaleDateString()} ${new Date(message.time).toLocaleTimeString()}`} </p>
                                <h3>{ message.from }</h3>
                                <p>{ message.message }</p>
                            </div>
                            )
                }) : <div className="message">No messages</div>
            }
        </div>
    )
}

export default ChatArea;