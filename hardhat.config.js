require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-truffle5");
require('@openzeppelin/hardhat-upgrades');

const { alchemyApikey, mnemonic } = require('./secrets.json');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${alchemyApikey}`,
      accounts: {mnemonic: mnemonic},
    },
  },
  solidity: "0.8.16",
};
