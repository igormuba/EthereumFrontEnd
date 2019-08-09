import React, { Component } from "react";
import Web3 from "web3";
import { contract_address, contract_abi } from "./contract";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header";
import AccountDetails from "./components/accountDetails/accountDetails";

class App extends Component {
  componentWillMount() {
    this.blockchainConnection();
  }

  async blockchainConnection() {
    let web3 = new Web3(Web3.givenProvider);
    let accounts = await web3.eth.getAccounts();
    let balance = await web3.eth.getBalance(accounts[0]);
    let erc20token = new web3.eth.Contract(contract_abi, contract_address);
    let myTokenAmount = await erc20token.methods.balanceOf(accounts[0]).call();
    myTokenAmount = myTokenAmount ? myTokenAmount : 0;
    this.setState({
      account: accounts[0],
      balance: parseInt(myTokenAmount)
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      balance: 0
    };
  }

  render() {
    return (
      <div>
        <Header />
        <AccountDetails
          account={this.state.account}
          balance={this.state.balance}
        />
      </div>
    );
  }
}

export default App;
