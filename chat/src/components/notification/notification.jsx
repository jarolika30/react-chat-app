import React from 'react';
import NotifyMe from './notify';
import './notification.css';

class Notification extends React.Component {
    constructor() {
        super();
        this.input = React.createRef();
      }
    render = () => (
            <>
            <label className="label">
            <input type="checkbox" className="radio" defaultValue=""  ref={this.input} onChange={(e) => {
                if (this.input.current.checked) {
                    NotifyMe();
                }
            }} />
            <span className="notify-text">Notifications</span>
            </label>
        </>
    )
}

export default Notification;