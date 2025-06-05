require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    basesepolia: {
      url: "https://sepolia.base.org",
      accounts: [process.env.PRIVATE_KEY],
    },
    base: {
      url: "https://mainnet.base.org",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      basesepolia: "YFW64Y2IAC9XX34BV1K3WWWHG8NQ8261YF",
      base: "YFW64Y2IAC9XX34BV1K3WWWHG8NQ8261YF" // You'll need to get an API key from Base
    },
    customChains: [
      {
        network: "basesepolia",
        chainId: 84532,
        urls: {
          apiURL: "https://api-sepolia.basescan.org/api",
          browserURL: "https://sepolia.basescan.org"
        }
      },
      {
        network: "base",
        chainId: 8453,
        urls: {
          apiURL: "https://api.basescan.org/api",
          browserURL: "https://basescan.org"
        }
      }
    ]
  }
}; 