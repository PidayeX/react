//import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
//
//class App extends Component {
//  render() {
//    return (
//      <div className="App">
//        <header className="App-header">
//          <img src={logo} className="App-logo" alt="logo" />
//          <h1 className="App-title">Welcome to React</h1>
//        </header>
//        <p className="App-intro">
//          To get started, edit <code>src/App.js</code> and save to reload.
//        </p>
//      </div>
//    );
//  }
//}
//
//export default App;
import React, {Component} from "react"
import _ from "lodash"

import Handle from "./Handle"
import List from './List'

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      infoArr:[]
    }

  }
  render(){
    return(
        <div>
          <Handle handleAdd={this.handleAdd.bind(this)}/>
          <List handleDelete={this.handleDelete.bind(this)} data={this.state.infoArr}/>
        </div>
    )
  }
  handleAdd(info){
    let infoArr2 = _.concat(this.state.infoArr,info);
    this.setState({
      infoArr:infoArr2
    })
  }
  handleDelete(index){
    _.pullAt(this.state.infoArr,index);
    this.setState({
      infoArr:this.state.infoArr
    })
  }
}