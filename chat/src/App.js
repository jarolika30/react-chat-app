import React from 'react';
import Header from './components/header/header';
import CreateMessage from './components/createMessage/createMessage';
import ChatArea from './components/chatArea/chatArea';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <CreateMessage />
      <ChatArea/>
    </div>
  );
}

export default App;
