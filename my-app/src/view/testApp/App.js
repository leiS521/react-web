import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Spin } from 'antd';
class App extends Component {
  render() {
      console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo}  onClick={()=>{this.props.history.goBack()}} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Spin />
      </div>
    );
  }
}

export default App;
