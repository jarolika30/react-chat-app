import React from 'react';
import Notification from '../notification/notification';
import Error from '../errors/error';
import Turn from '../turn/turn';
import './header.css';

const Header = (props) => {
    return (
        <header className="header">
            <h1 className="title">Start to chat!</h1>
            <Error text_error={ props.error }/>
            <Notification />
            <Turn turnColor={props.color}/>
        </header>
    )
}

export default Header;