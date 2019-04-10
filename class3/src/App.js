import React, { Component } from 'react';
import Web3 from 'web3'
import {contract_address, contract_abi} from './contract'
import logo from './logo.svg';
import './App.css';


class App extends Component {

  componentWillMount(){
    this.blockchainConnection()
  }

  async blockchainConnection(){
    let web3 = new Web3(Web3.givenProvider);
    let balance = await web3.eth.getBalance('0xeB38D4269c2880d555A29D906A320DA2b340A675');
    let erc20token = new web3.eth.Contract(contract_abi, contract_address)
    let myTokenAmount = await erc20token.methods.balanceOf('0xeB38D4269c2880d555A29D906A320DA2b340A675').call()
    this.setState({
      balance: parseInt(myTokenAmount)
    })
  }

  constructor(props){
    super(props)
    this.state = {
      balance: 0
    }
  }



  render(){
    return(
      <div>
      <p>Token Balance: {this.state.balance}</p>
      </div>
      );
  }
}

export default App;
