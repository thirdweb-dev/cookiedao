import { useWeb3 } from "@3rdweb/hooks";
import decoration from "../assets/decoration.png";

export const LandingScreen = () => {
  const { address, connectWallet, disconnectWallet } = useWeb3();

  return (
    <div className="landing">
      <div className="landing__text">
        <h1>CookieDAO</h1>
        <h2>The best DAO for cookie lovers</h2>
        <p>Join thousand other developers in the best DAO for JavaScript developers.</p>
        <div>
          {address ? (
            <button className="btn-black" onClick={() => disconnectWallet()}>
              {address.slice(0, 6)}...{address.slice(address.length - 6, address.length)}
            </button>
          ) : (
            <button className="btn-black" onClick={() => connectWallet("injected")}>
              Connect Wallet
            </button>
          )}
        </div>
      </div>
      <img className="decoration" src={decoration} alt="Cookie decoration" />
    </div>
  );
};