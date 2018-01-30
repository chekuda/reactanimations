import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';

export default class App extends Component {
  constructor(){
    super()
    this.flag = true
    this.state ={}
  }
  changeState = () =>{
    if(!this.flag){
      return
    }
    this.flag = false

    this.setState({
      jose: 'jose'
    })
    console.log('asdadad')
  }
  render() {
    console.log(this.state.jose)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro" onClick={this.changeState}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
