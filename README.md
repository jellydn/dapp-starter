# Welcome to dapp-starter 👋

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

![Version](https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)
[![Twitter: jellydn](https://img.shields.io/twitter/follow/jellydn.svg?style=social)](https://twitter.com/jellydn)

> Opinionated Dapp Starter Template

## 🏠 [Homepage](https://dapp-starter.productsway.com)

## ✨ [Demo](https://dapp-starter.productsway.com)

## Screenshot

![./screenshot.png](./screenshot.png)

### Connect to MetaMask

![https://gyazo.com/6b8f75171de1fab24de552ff7930f4b8.gif](https://gyazo.com/6b8f75171de1fab24de552ff7930f4b8.gif)

### Wallet Connect

![https://gyazo.com/2995c3a2c4bdbda806821839826449dc.gif](https://gyazo.com/2995c3a2c4bdbda806821839826449dc.gif)

### Show balance and sign message

![https://gyazo.com/8e8ca7c89193d6f1463081bcd41c587e.gif](https://gyazo.com/8e8ca7c89193d6f1463081bcd41c587e.gif)

## Features

- ⚡️ The React Framework for Production [NextJs](https://https://nextjs.org//)
- 📦 [Hardhat](https://hardhat.org/) - Ethereum development environment for professionals
- 🦾 [TypeChain Hardhat plugin](https://github.com/ethereum-ts/TypeChain/tree/master/packages/hardhat) - Automatically generate TypeScript bindings for smartcontracts while using Hardhat.
- 🔥 [web3-react](https://github.com/NoahZinsmeister/web3-react/) - A simple, maximally extensible, dependency minimized framework for building modern Ethereum dApps
- 🎨 [daisyUI Tailwind CSS Components](https://daisyui.com/) - clean HTML with component classes
- 🎨 [OpenZeppelin](https://docs.openzeppelin.com/contracts/4.x/) - standard for secure blockchain applications

## Install

```sh
pnpm install
```

## Usage

```sh
pnpm run dev
```

## Run tests

```sh
pnpm run test
```

## Pre-commit

This project uses [Pre-commit](https://pre-commit.com/) to enforce code quality. To install pre-commit, run:

```sh
pre-commit install
```

## Hardhat guideline

This project demonstrates an advanced Hardhat use case, integrating other tools commonly used alongside Hardhat in the ecosystem.

The project comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts. It also comes with a variety of other tools, preconfigured to work with the project code.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile --network localhost
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
REPORT_GAS=true npx hardhat test
npx hardhat coverage
npx hardhat run scripts/deploy_greeter.ts --network localhost
node scripts/deploy.ts
npx eslint '**/*.ts'
npx eslint '**/*.ts' --fix
npx prettier '**/*.{json,sol,md}' --check
npx prettier '**/*.{json,sol,md}' --write
npx solhint 'contracts/**/*.sol'
npx solhint 'contracts/**/*.sol' --fix
```

## Deploy to Ropsten Testnet

- Sign up and earn [$100 in credit](https://alchemy.com/?r=9ae3d9f1-56c4-476e-9f7e-23387e0e166a) on alchemy. More detail [here](https://docs.alchemy.com/alchemy/introduction/referral-program).

- Send some ETH to your wallet https://faucet.dimensions.network/

## Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Ropsten node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
npx hardhat run --network ropsten scripts/deploy_greeter.ts
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS "Hello, Hardhat!"
```

## Contract upgrade

OpenZeppelin provides tooling for deploying and securing [upgradeable smart contracts](https://docs.openzeppelin.com/learn/upgrading-smart-contracts).

Smart contracts deployed using OpenZeppelin Upgrades Plugins can be upgraded to modify their code, while preserving their address, state, and balance. This allows you to iteratively add new features to your project, or fix any bugs you may find in production.

In this project, there are a 2 versions of contract: Box and BoxV2 which is improvement of Box. First deploy your contract:

```shell
npx hardhat run --network localhost scripts/deploy_upgradeable_box.ts
```

Then, deploy the upgrade smart contract

```shell
npx hardhat run --network localhost scripts/upgrade_box.ts
```

## Examples

- [Simple Store App](https://github.com/jellydn/dapp-starter/pull/20): counter-like smart contract, read/write value and listen to event from smart contract.
- [ICO Token App](https://github.com/jellydn/dapp-token-ico): How to create An ERC20 token and implement ICO smart contract (CrowdSale).
- [NFT App](https://github.com/jellydn/nft-app): How to create An ERC721 token.

## Author

👤 **Dung Huynh**

- Website: https://productsway.com/
- Twitter: [@jellydn](https://twitter.com/jellydn)
- Github: [@jellydn](https://github.com/jellydn)

## Stargazers 🌟

[![Stargazers repo roster for jellydn/dapp-starter](https://reporoster.com/stars/jellydn/dapp-starter)](https://github.com/jellydn/dapp-starter/stargazers)

## Show your support

[![kofi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/dunghd)
[![paypal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/dunghd)
[![buymeacoffee](https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/dunghd)

Give a ⭐️ if this project helped you!

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://productsway.com/"><img src="https://avatars.githubusercontent.com/u/870029?v=4?s=100" width="100px;" alt="Dung Duc Huynh (Kaka)"/><br /><sub><b>Dung Duc Huynh (Kaka)</b></sub></a><br /><a href="https://github.com/jellydn/dapp-starter/commits?author=jellydn" title="Documentation">📖</a> <a href="https://github.com/jellydn/dapp-starter/commits?author=jellydn" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://bio.warengonzaga.com/"><img src="https://avatars.githubusercontent.com/u/15052701?v=4?s=100" width="100px;" alt="Waren Gonzaga"/><br /><sub><b>Waren Gonzaga</b></sub></a><br /><a href="#financial-warengonzaga" title="Financial">💵</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
