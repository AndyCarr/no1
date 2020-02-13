import React, { Component } from 'react';
import './App.css';           //App Style Sheet 
import Users from './Users';  //Pull in Users

class App extends Component {
  render() {
    return (
      <div className="App">
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
