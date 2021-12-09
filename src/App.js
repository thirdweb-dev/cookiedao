import { useMemo } from "react";
import './App.css';
import { useWeb3 } from "@3rdweb/hooks";
import { ThirdwebSDK } from "@3rdweb/sdk";

const App = () => {
  const { address, connectWallet, provider } = useWeb3();
  const signer = useMemo(() => provider?.getSigner(), [provider]);
  const sdk = new ThirdwebSDK(signer);

  const claimNft = async () => {
    try {
      const drop = sdk.getDropModule("0xc0E6FB30A848f8b5408E4AA6A1415545F4C1e0E4");
      await drop.claim(1);
    } catch (error) {
      console.error(error);
    }
  };

  const screenToShow = () => {
    if (false) {
      return (
        <div>
          <h1>🍪 Welcome, fellow CookieDAO Member</h1>
          <button onClick={() => window.open("https://discord.gg/")}>
            Join the Discord
          </button>
        </div>
      );
    } else if (address) {
      return (
        <>
          <h1>👀 Looks like you're not in the DAO</h1>
          <button onClick={claimNft}>
            Mint NFT
          </button>
        </>
      );
    } else {
      return (
        <>
          <h1>CookieDAO</h1>
          <button onClick={() => connectWallet("injected")}>
            Connect Wallet
          </button>
        </>
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
