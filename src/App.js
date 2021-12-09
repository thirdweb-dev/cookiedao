import { useEffect, useMemo, useState } from "react";
import './App.css';
import { useWeb3 } from "@3rdweb/hooks";
import { ThirdwebSDK } from "@3rdweb/sdk";

const App = () => {
  const [balance, setBalance] = useState(null);
  const { address, connectWallet, provider } = useWeb3();
  const signer = useMemo(() => provider?.getSigner(), [provider]);
  const sdk = new ThirdwebSDK(signer);
  const dropAddress = "0xc0E6FB30A848f8b5408E4AA6A1415545F4C1e0E4";

  useEffect(() => {
    getBalance();
  }, [address]);

  const getBalance = async () => {
    try {
      const drop = sdk.getDropModule(dropAddress);
      const balance = Number(await drop.balance());
      setBalance(balance);
    } catch (error) {
      console.error(error);
    }
  };

  const claimNft = async () => {
    try {
      const drop = sdk.getDropModule(dropAddress);
      await drop.claim(1);
      getBalance();
    } catch (error) {
      console.error(error);
    }
  };

  const screenToShow = () => {
    if (balance) {
      return (
        <div>
          <h1>🍪 Welcome, fellow CookieDAO Member</h1>
          <button onClick={() => window.open("https://discord.gg")}>
            Join the Discord
          </button>
        </div>
      );
    } else if (address) {
      return (
        <div>
          <h1>👀 Looks like you're not in the DAO</h1>
          <button onClick={claimNft}>
            Mint NFT
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>CookieDAO</h1>
          <button onClick={() => connectWallet("injected")}>
            Connect Wallet
          </button>
        </div>
      );
    }
  };

  return (
    <div className="landing">
      <div className="container">
        {screenToShow()}
      </div>
    </div>
  );
};

export default App;
