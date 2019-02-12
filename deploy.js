const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

let provider = new HDWalletProvider(
  "", // use your testnet account private key
  "" // Use link provided by infura
);

const web3 = new Web3(provider);

const deploy = async () => {
  let accounts = await web3.eth.getAccounts();

  console.log("attempting to deploy the contract from account", accounts[0]);

  let result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: "0x" + bytecode, arguments: ["Jon Doe"] })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("Contract deployed to address ", result.options.address);
};
deploy();
