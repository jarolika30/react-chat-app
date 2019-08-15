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
    const myStorage = window.localStorage;
    if (myStorage.getItem('Nickname')) {
      this.name = myStorage.getItem('Nickname');
    } else {
      this.name = "";
    }
    this.state = {
      data: [],
      turn_color: "white",
      error_msg: "",
      connected: true
    }
  }

  startSocket = () => {
    if(typeof(WebSocket)=="undefined") { 
        alert("Your browser does not support WebSockets. Try to use Chrome or Safari."); 
    } else {
        this.socket.onopen = () => {
          this.setState({turn_color: "green"});
        }
        this.socket.onmessage = (event) =>  {
          const arr = JSON.parse(event.data);
          const res = this.state.data.concat(...arr);
          this.setState({data: res});
        }
        this.socket.onclose = () => {
          console.log('Connection is closed.');
          this.setState({turn_color: "red"});
          this.setState({ error_msg: "Сonnection aborted, attempt to reconnect..."});
          this.socket = null;
          this.socket = new WebSocket(this.uri);
          setTimeout(this.startSocket, 1000);
        }
        this.socket.onerror = (error) => {
            this.setState({turn_color: "red"});
            this.setState({ error_msg: "An error occurred. Try to reload the page!"});
        };
    }
  }
  
  render() {
    this.startSocket();
    return (
      <div className="App">
        <Header color={this.state.turn_color} error={ this.state.error_msg}/>
        <CreateMessage socket={ this.socket } nickname={ this.name }/>
        <ChatArea messages={ this.state.data } name={ this.name }/>
      </div>
    );
  }
}

export default App;
