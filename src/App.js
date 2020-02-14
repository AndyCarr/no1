import React, { Component } from 'react';
import './App.css';
import Users from './Users';

class App extends Component {
  render() {
    return (
      <div className="Apps">
      {/*Post Title*/}
        <header className="App-header">
          <h1 className="App-title">Lumps and Bumps</h1>    
          <Users />     {/*Post Users*/}
        </header>
      </div>
    );
  }
}
export default App;  
