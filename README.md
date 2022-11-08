<p align="center">

</p>
<h1 align="center"> Brainic 🧠</h1>

<p align="center">
<a href="https://github.com/sensurusirupus/brainic/blob/master/LICENSE" title="License">
<img src="https://img.shields.io/github/license/sensurusirupus/brainic" alt="brainic"/>
</a>
<a href="https://github.com/sensurusirupus/brainic/fork" title="Forks">
<img src="https://img.shields.io/github/forks/sensurusirupus/brainic" alt="brainic Forks"/>
</a>
<a href="https://github.com/sensurusirupus/brainic" title="Stars">
<img src="https://img.shields.io/github/stars/sensurusirupus/brainic" alt="brainic Stars"/>
</a>
<a href="https://img.shields.io/github/stars/sensurusirupus/brainic/issues" title="Issues">
<img src="  https://img.shields.io/github/issues/sensurusirupus/brainic" alt="brainic Issues"/>
</a>

</a>
</p>

<p align="center" title="Project Initiator"><img src="./src/assets/img/brainic.png" alt="Project Initiator"/></p>

<h2 align="center">🌐 Links 🌐</h2>
<p align="center">
    <a href="https://youtu.be/ud4P45zhCk0" title="">🖥️ Video</a>
    .
    <a href="brainic.netlify.app" title="">🔗 Website</a>
    ·
    <a href="https://github.com/sensurusirupus/brainic" title="">📂 Repo</a>
    ·
    <a href="https://github.com/sensurusirupus/brainic" title="🐛Report Bug/🎊Request Feature">🚀 Got Issue</a>
</p>

## 🚀 What is Brainic

Brainic is a web3 memory game application that helps improve the memory of individuals while wining tokes as a result. The application is designed to be played by anyone, regardless of their age or experience with memory games. The goal of the game is to help the player improve their memory, while also providing them with the opportunity to win tokens as a result.

The game is played by matching pairs of cards, with each card representing a different nft image challenge. The more pairs of cards the player can match, the more tokens they will win. In addition to the opportunity to win tokens, the game also provides the player with a chance to improve their memory skills. The application is available for free, and can be played on any web-enabled device.

## 🦋 Prerequisite

- [Nodejs](https://nodejs.org/en// "Node") Installed

- [Git](https://git-scm.com/ "Git OFficial") Installed

- [npm](https://www.npmjs.com/ "npm ") Installed

- [truffle](https://truffle.org/ "Truffle ") Installed

## 🛠️ Installation Steps

1. Clone the repository

```Bash
git clone https://github.com/sensurusirupus/brainic
```

2. Change the working directory

```Bash
cd brainic
```

3. Start the local Hardhat node

```Bash
npx hardhat node
```

4. With the network running, deploy the contracts to the local network in a separate terminal window

```Bash
npx hardhat run scripts/deploy.js --network localhost
```

5. Start the app

```Bash
npm run start
```

**🎇 You are Ready to Go!**

## ⚙️ Configuration

The chain ID should be 80001. If you have a localhost rpc set up, you may need to overwrite it.

<p align="center" title="Project Initiator"><img src="./src/assets/img/rpc.jpg" alt="Project Initiator"/></p>

To deploy to Polygon test or main networks, update the configurations located in hardhat.config.js to use a private key and, optionally, deploy to a private RPC like Infura.

```Bash
require("babel-register");
require("babel-polyfill");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require("fs");
const privateKey = fs.readFileSync("secret.txt").toString();
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
    },
    matic: {
      provider: () =>
        new HDWalletProvider(
          privateKey,
          `**your matic private key here**`
        ),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },
  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/abis/",
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};

```

## 👷 Built with

- [Solidity](https://docs.soliditylang.org/en/v0.8.17/ "Solidity"): as Main Coding Language for writing smart contract

- [ReactJs](https://reactjs.org/ "React Js"): as Main Coding Language for Creating The UI components (Front End)

- [Bootstrap](https://tailwindcss.com/ "Bootstrap Css"): as Main Coding Language for styling UI components

- [IPFS](https://ipfs.tech/ "IPFS"): For Storing of files

- [Web3 Storage](https://www.google.com/search?q=web3storage "Web3 Storage"): For Storing of files

- [Github](https://github.com/ "Github") : For Repo Storage and source code management

- [Git](https://git-scm.com/ "Git") : For Version Control System

## 📂 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

- Fork the Project

- Create your Feature Branch (git checkout -b feature/AmazingFeature)

- Commit your Changes (git commit -m 'Add some AmazingFeature')

- Push to the Branch (git push origin feature/AmazingFeature)

- Open a Pull Request

## 🧑🏻 Author

**Sensurus Irupus**

- 🌌 [Profile](https://github.com/sensurusirupus "Sensurus Irupus")

- 🏮 [Email](sensurusirupus@gmail.com "Hi!")

<h2 align="center">🤝 Support</h2>

<p align="center">🎀 Contributions (<a href="https://guides.github.com/introduction/flow" title="GitHub flow">GitHub Flow</a>), 🔥 issues, and 🥮 feature requests are most welcome!</p>

<p align="center">💙 If you like this project, Give it a ⭐ and Share it with friends!</p>

<p align="center">Made with Solidity and Javascript & ❤️ </p>
