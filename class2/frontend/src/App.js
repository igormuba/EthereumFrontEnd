import React, { Component } from 'react';
import Web3 from 'web3'
import logo from './logo.svg';
import './App.css';


class App extends Component {

  componentWillMount(){
    this.blockchainConnection()
  }

  async blockchainConnection(){
    let web3 = new Web3(Web3.givenProvider);
    let balance = await web3.eth.getBalance('0xeB38D4269c2880d555A29D906A320DA2b340A675');
    console.log(balance);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
