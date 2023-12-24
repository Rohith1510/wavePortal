require("@nomicfoundation/hardhat-toolbox");
// Import and configure dotenv
require("dotenv").config();

module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      // This value will be replaced on runtime
      url: process.env.ALCHEMY_URL,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],

    },
   
  },
};