import chocolateCookie from "../assets/chocolate-cookie.png";
import goldenCookie from "../assets/golden-cookie.png";
import decoration from "../assets/decoration.png";
import { useWeb3 } from "@3rdweb/hooks";
import { useMemo } from "react";
import { ThirdwebSDK } from "@3rdweb/sdk";

export const ClaimScreen = () => {
  const { provider } = useWeb3();

  const signer = useMemo(() => provider ? provider.getSigner() : null, [provider]);

  const sdk = new ThirdwebSDK(signer);

  const claimNft = async () => {
    try {
      const drop = sdk.getDropModule("0xc0E6FB30A848f8b5408E4AA6A1415545F4C1e0E4");
      await drop.claim(1);
    } catch (error) {
      console.error(error);
    }
  };

  const claimVipNft = async () => {
    try {
      const drop = sdk.getDropModule("0x6fcFA6917841B6129289dD965B4C6087a5C2c682");
      await drop.claim(1);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="claim__container">
      <div className="claim">
        <h1>Claim</h1>
        <div className="claim-cards">
          <div className="claim-card">
            <img src={chocolateCookie} alt="Chocolate Cookie" />
            <div className="claim-card__text">
              <h2>Chocolate Cookie</h2>
              <p>Claim this Cookie NFT to join CookieDAO, we’ll take care of the gas for you :)</p>
            </div>
            <div className="button-container"><button className="btn-black" onClick={claimNft}>Free</button></div>
          </div>
          <div className="claim-card mt">
            <img src={goldenCookie} alt="Golden Cookie" />
            <div className="claim-card__text">
              <h2>Golden Cookie</h2>
              <p>This NFT will give you extra benefits inside CookieDAO</p>
            </div>
            <div className="button-container"><button className="btn-black" onClick={claimVipNft}>$100 COOKIE</button></div>
          </div>
        </div>
      </div>
      <img className="decoration" src={decoration} alt="Cookie decoration" />
    </div>
  );
};
