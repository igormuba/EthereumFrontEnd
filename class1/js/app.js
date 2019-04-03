import Web3 from 'web3';

let wallet;

async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const network = await web3.eth.net.getNetworkType();
    const accounts = await web3.eth.getAccounts()
    wallet = accounts[0]
  }

loadBlockchainData();

console.log(wallet);