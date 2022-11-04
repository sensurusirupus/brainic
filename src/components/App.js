import React, { Component } from "react";
import Web3 from "web3";
import "./App.css";
import MemoryToken from "../abis/MemoryToken.json";
import brain from "../brain.png";
function truncateString(str, length) {
  return str.length > length ? str.substring(0, length - 3) + "..." : str;
}

const CARD_ARRAY = [
  {
    name: "img1",
    img:
      "https://bafybeibzopc3ym2e7l7jj5elr7krqhmwfn7l6dpmens4odsk5c6zuubpnq.ipfs.w3s.link/resize-1667320441239450246picListimg6.jpg",
  },
  {
    name: "img2",
    img:
      "https://bafybeic3fqvi4mpe67oyhjrkxmotwamslwc5bnz3gsifpnirmktoyeut7m.ipfs.w3s.link/resize-1667320521550054567picListimg9.jpg",
  },
  {
    name: "img3",
    img:
      "https://bafybeiciponywi5qmct22ldmvwm3fg6veuzlns3t7gmekf64qqavhhd2ga.ipfs.w3s.link/",
  },
  {
    name: "img4",
    img:
      "https://bafybeih5u5fs3yleqqrkwnqk3vk5gijd6bjfffk5wmvythvgvi6gvvsrse.ipfs.w3s.link/resize-1667320369549618464picListimg2.jpg",
  },
  {
    name: "img5",
    img:
      "https://bafybeiaagknxtrnytkgae6rysxyo7mzbi7iyn2n6f5ugfkypt63ucm2hgq.ipfs.w3s.link/resize-1667320555420578792picListimg11.jpg",
  },
  {
    name: "img6",
    img:
      "https://bafybeibpa24y3g42hd7ux53lyw6fdkmtvygncfzj2tmwrsfcpaoxmsa7hq.ipfs.w3s.link/resize-16673205351464724290picListimg10.jpg",
  },
  {
    name: "img7",
    img:
      "https://bafybeifvdt2xgzkysuxj2m5ltoklck73sd4skziawfhhfvgudbfxkt4lla.ipfs.w3s.link/img1.jpg",
  },
  {
    name: "img8",
    img:
      "https://bafybeiaqle3xqwoxvkqzvk542b647mxtpwpuraqqlfyughus4f3vctyn54.ipfs.w3s.link/resize-16673206211783439002picListimg13.jpg",
  },
  {
    name: "img9",
    img:
      "https://bafybeiabwqjmm6zl3oamnutu4cs7p3xjcy5hmi2kfbklk6xn533nzyuhxu.ipfs.w3s.link/resize-166732042550568376picListimg5.jpg",
  },
  {
    name: "img10",
    img:
      "https://bafybeie72jpkhh5nselbznd7im5by5yjo7x5nazk43fccsxdtqela3wboa.ipfs.w3s.link/resize-166732057464131913picListimg12%20(1).jpg",
  },
  {
    name: "img11",
    img:
      "https://bafybeianpv4qomv22x4twgng325hqc62ylqv3rttd6bacsza5lshhitscu.ipfs.w3s.link/resize-16673206431409009581picListimg14.jpg",
  },
  {
    name: "img12",
    img:
      "https://bafybeicnzhvd3f2cemcxunrsa7ggeqzl22b7e4sjxdq7nx5xhfhwcxrbhe.ipfs.w3s.link/resize-1667320472889404167picListimg7.jpg",
  },
  {
    name: "img13",
    img:
      "https://bafybeicudo5ufv6tpbh7siahxmkzzx7qk5ifu3zk3so4niiursnuktlomu.ipfs.w3s.link/resize-1667320407324895351picListimg4.jpg",
  },
  {
    name: "img14",
    img:
      "https://bafybeigwlthuky2hgztz2yyfyx4baprccvpbzncjoyzvnapomwvfxfmgli.ipfs.w3s.link/resize-1667320394665921967picListimg3.jpg",
  },
  {
    name: "img1",
    img:
      "https://bafybeibzopc3ym2e7l7jj5elr7krqhmwfn7l6dpmens4odsk5c6zuubpnq.ipfs.w3s.link/resize-1667320441239450246picListimg6.jpg",
  },
  {
    name: "img2",
    img:
      "https://bafybeic3fqvi4mpe67oyhjrkxmotwamslwc5bnz3gsifpnirmktoyeut7m.ipfs.w3s.link/resize-1667320521550054567picListimg9.jpg",
  },
  {
    name: "img3",
    img:
      "https://bafybeiciponywi5qmct22ldmvwm3fg6veuzlns3t7gmekf64qqavhhd2ga.ipfs.w3s.link/",
  },
  {
    name: "img4",
    img:
      "https://bafybeih5u5fs3yleqqrkwnqk3vk5gijd6bjfffk5wmvythvgvi6gvvsrse.ipfs.w3s.link/resize-1667320369549618464picListimg2.jpg",
  },
  {
    name: "img5",
    img:
      "https://bafybeiaagknxtrnytkgae6rysxyo7mzbi7iyn2n6f5ugfkypt63ucm2hgq.ipfs.w3s.link/resize-1667320555420578792picListimg11.jpg",
  },
  {
    name: "img6",
    img:
      "https://bafybeibpa24y3g42hd7ux53lyw6fdkmtvygncfzj2tmwrsfcpaoxmsa7hq.ipfs.w3s.link/resize-16673205351464724290picListimg10.jpg",
  },
  {
    name: "img7",
    img:
      "https://bafybeifvdt2xgzkysuxj2m5ltoklck73sd4skziawfhhfvgudbfxkt4lla.ipfs.w3s.link/img1.jpg",
  },
  {
    name: "img8",
    img:
      "https://bafybeiaqle3xqwoxvkqzvk542b647mxtpwpuraqqlfyughus4f3vctyn54.ipfs.w3s.link/resize-16673206211783439002picListimg13.jpg",
  },
  {
    name: "img9",
    img:
      "https://bafybeiabwqjmm6zl3oamnutu4cs7p3xjcy5hmi2kfbklk6xn533nzyuhxu.ipfs.w3s.link/resize-166732042550568376picListimg5.jpg",
  },
  {
    name: "img10",
    img:
      "https://bafybeie72jpkhh5nselbznd7im5by5yjo7x5nazk43fccsxdtqela3wboa.ipfs.w3s.link/resize-166732057464131913picListimg12%20(1).jpg",
  },
  {
    name: "img11",
    img:
      "https://bafybeianpv4qomv22x4twgng325hqc62ylqv3rttd6bacsza5lshhitscu.ipfs.w3s.link/resize-16673206431409009581picListimg14.jpg",
  },
  {
    name: "img12",
    img:
      "https://bafybeicnzhvd3f2cemcxunrsa7ggeqzl22b7e4sjxdq7nx5xhfhwcxrbhe.ipfs.w3s.link/resize-1667320472889404167picListimg7.jpg",
  },
  {
    name: "img13",
    img:
      "https://bafybeicudo5ufv6tpbh7siahxmkzzx7qk5ifu3zk3so4niiursnuktlomu.ipfs.w3s.link/resize-1667320407324895351picListimg4.jpg",
  },
  {
    name: "img14",
    img:
      "https://bafybeigwlthuky2hgztz2yyfyx4baprccvpbzncjoyzvnapomwvfxfmgli.ipfs.w3s.link/resize-1667320394665921967picListimg3.jpg",
  },
];

class App extends Component {
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
    this.setState({ cardArray: CARD_ARRAY.sort(() => 0.5 - Math.random()) });
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });

    // Load smart contract
    const networkId = await web3.eth.net.getId();
    const networkData = MemoryToken.networks[networkId];
    if (networkData) {
      const abi = MemoryToken.abi;
      const address = networkData.address;
      const token = new web3.eth.Contract(abi, address);
      this.setState({ token });
      const totalSupply = await token.methods.totalSupply().call();
      this.setState({ totalSupply });
      // Load Tokens
      let balanceOf = await token.methods.balanceOf(accounts[0]).call();
      for (let i = 0; i < balanceOf; i++) {
        let id = await token.methods.tokenOfOwnerByIndex(accounts[0], i).call();
        let tokenURI = await token.methods.tokenURI(id).call();
        this.setState({
          tokenURIs: [...this.state.tokenURIs, tokenURI],
        });
      }
    } else {
      alert("Smart contract not deployed to detected network.");
    }
  }

  chooseImage = (cardId) => {
    cardId = cardId.toString();
    if (this.state.cardsWon.includes(cardId)) {
      return window.location.origin + "/images/white.png";
    } else if (this.state.cardsChosenId.includes(cardId)) {
      return CARD_ARRAY[cardId].img;
    } else {
      return window.location.origin + "/images/default.png";
    }
  };

  flipCard = async (cardId) => {
    let alreadyChosen = this.state.cardsChosen.length;

    this.setState({
      cardsChosen: [
        ...this.state.cardsChosen,
        this.state.cardArray[cardId].name,
      ],
      cardsChosenId: [...this.state.cardsChosenId, cardId],
    });

    if (alreadyChosen === 1) {
      setTimeout(this.checkForMatch, 100);
    }
  };

  checkForMatch = async () => {
    const optionOneId = this.state.cardsChosenId[0];
    const optionTwoId = this.state.cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      alert("You have clicked the same image!");
    } else if (this.state.cardsChosen[0] === this.state.cardsChosen[1]) {
      alert("You found a match");
      this.state.token.methods
        .mint(
          this.state.account,
          window.location.origin + CARD_ARRAY[optionOneId].img.toString()
        )
        .send({ from: this.state.account })
        .on("transactionHash", (hash) => {
          this.setState({
            cardsWon: [...this.state.cardsWon, optionOneId, optionTwoId],
            tokenURIs: [...this.state.tokenURIs, CARD_ARRAY[optionOneId].img],
          });
        });
    } else {
      alert("Sorry, try again");
    }
    this.setState({
      cardsChosen: [],
      cardsChosenId: [],
    });
    if (this.state.cardsWon.length === CARD_ARRAY.length) {
      alert("Congratulations! You found them all!");
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      account: "0x0",
      token: null,
      totalSupply: 0,
      tokenURIs: [],
      cardArray: [],
      cardsChosen: [],
      cardsChosenId: [],
      cardsWon: [],
    };
  }

  render() {
    return (
      <div style={{ backgroundColor: "#080E37" }}>
        <nav
          className="navbar  fixed-top flex-md-nowrap p-0 shadow"
          // style={{ backgroundColor: "#00C899" }}
          style={{ backgroundColor: "#080E37" }}
        >
          <iframe
            src="https://embed.lottiefiles.com/animation/6633"
            frameBorder={0}
            width={110}
            height={110}
          ></iframe>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small className="text-muted">
                <span
                  id="account"
                  style={{ fontSize: "20px", marginRight: "30px" }}
                >
                  {truncateString(this.state.account, 8)}
                </span>
              </small>
            </li>
          </ul>
        </nav>
        <div className="container-fluid">
          <div className="row" style={{ marginTop: "110px" }}>
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <h1 className="d-4">Start matching now!</h1>

                <div className="grid mb-4" style={{ width: "700px" }}>
                  {this.state.cardArray.map((card, key) => {
                    return (
                      <img
                        key={key}
                        src={this.chooseImage(key)}
                        data-id={key}
                        onClick={(event) => {
                          let cardId = event.target.getAttribute("data-id");
                          if (
                            !this.state.cardsWon.includes(cardId.toString())
                          ) {
                            this.flipCard(cardId);
                          }
                        }}
                      />
                    );
                  })}
                </div>

                <div>
                  <h5>
                    Tokens Collected:
                    <span id="result">&nbsp;{this.state.tokenURIs.length}</span>
                  </h5>

                  <div className="grid mb-4">
                    {this.state.tokenURIs.map((tokenURI, key) => {
                      return <img key={key} src={tokenURI} />;
                    })}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
