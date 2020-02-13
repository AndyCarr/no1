import React, { Component } from 'react';
import './App.css';
import Pictures from './Pictures';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lumps and Bumps</h1>
        </header>
        <Pictures />
      </div>
    );
  }
}

export default App;
