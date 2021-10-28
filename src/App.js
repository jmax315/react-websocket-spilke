import React, { Component } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";


//ws://localhost:8000/engine.io/?EIO=3&transport=websocket
const client = new W3CWebSocket('ws://localhost:8000/engine.io/?EIO=3&transport=websocket');

class App extends Component {
  componentWillMount() {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    client.onmessage = (message) => {
      console.log(message);
    };
  }
  
  render() {
    return (
      <div>
        Practical Intro To WebSockets.
      </div>
    );
  }
}

export default App;
