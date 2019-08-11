import React from 'react';
import Header from './components/header/header';
import CreateMessage from './components/createMessage/createMessage';
import ChatArea from './components/chatArea/chatArea';
import './App.css';

class App extends React.Component  {
  constructor(props) {
    super(props);
    this.host = 'st-chat.shas.tel';
    this.uri = `ws://${this.host}`;
    this.socket = new WebSocket(this.uri);
    this.state = {
      name: "",
      message: "",
      data: []
    }
  }
  startSocket = () => {
    if(typeof(WebSocket)=="undefined") { 
        alert("Your browser does not support WebSockets. Try to use Chrome or Safari."); 
    } else {
        this.socket.onopen = () => {
          this.socket.onmessage = (event) =>  {
            const arr = JSON.parse(event.data);
            const res = this.state.data.concat(...arr);
            this.setState({data: res});
          }
        }
        this.socket.onerror = (error) => {
            console.log('WebSocket Error: ' + error);
        };
        
    }
  }
  
  render() {
    this.startSocket();
    return (
      <div className="App">
        <Header/>
        <CreateMessage socket={ this.socket }/>
        <ChatArea messages={ this.state.data }/>
      </div>
    );
  }
}

export default App;
