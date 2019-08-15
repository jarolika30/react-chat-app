import React from 'react';
import './chatArea.css';

const ChatArea = (props) => {
    return (
        <div className="chat">
            { props.messages ? props.messages.map(message => {
                const secondClass = message.from === props.name ? "right" : "";
                    return (
                            <div className= { `message-container ${secondClass}` } key={message.id}>
                                <div className="name">{ message.from }</div>
                                <div className="data">
                                    <div className="message">{ message.message }</div>
                                    <div className="time">{`${new Date(message.time).toLocaleDateString()} ${new Date(message.time).toLocaleTimeString()}`} </div>
                                </div>
                            </div>
                            )
                }) : <div className="message">No messages</div>
            }
        </div>
    )
}

export default ChatArea;