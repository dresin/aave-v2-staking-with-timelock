# Aave V2 Staking With Timelock

This is a DeFi project that can be deployed to Ethereum blockchain. It could also be deployed to any other EVM compatible blockchain as long as there are Aave V2 compatible contracts on that blockchain. This stack uses [Hardhat](https://hardhat.org) as the platform layer to orchestrate all the tasks. [Ethers](https://docs.ethers.io/v5/) is used for all Ethereum interactions and testing. All smart contracts are written in [Solidity](https://docs.soliditylang.org/en/v0.8.0/) and supported by the [TypeScript](https://www.typescriptlang.org/docs/) environment.

## Business Logic of the Project

Native tokens (ETH in case of Ethereum) can be locked for a given period of time. During the lock time user who deployed the tokens will be getting a reward in a form of interest. In the background, native tokens are being staked on Aave V2 market.

Users can deposit multiple times, but each time they deposit, the lock timer is reset.

Users can only withdraw the full amount. The only exception is interest which can be withdrawn multiple times.

If a user withdraws the deposit before the timelock is open there will be a penalty fee. The user will be charged with penalty that starts at 50% if the deposit is withdramn immediately, and it drops linearly until the end of the timelock period, when it becomes 0%. Tokens acquired from penalties will be shared among the remaining users, as an additional reward.

The interest can be withdrawn at any time without the penalty, it is not time-locked like the deposit.  

## Using this Project

Clone this repository, then install the dependencies with `npm install`. Build everything with `npm run build`. https://hardhat.org has excellent docs, and can be used as reference for extending this project.

## Available Functionality

### Build Contracts and Generate Typechain Typeings

`npm run compile`

### Deploy to Ethereum

Create/modify network config in `hardhat.config.ts` and add API key and private key, then run:

`npx hardhat run --network rinkeby scripts/deploy.ts`

### Verify on Etherscan

Using the [hardhat-etherscan plugin](https://hardhat.org/plugins/nomiclabs-hardhat-etherscan.html), add Etherscan API key to `hardhat.config.ts`, then run:

`npx hardhat verify --network rinkeby <DEPLOYED ADDRESS>`
