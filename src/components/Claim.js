import chocolateCookie from "../assets/chocolate-cookie.png";
import goldenCookie from "../assets/golden-cookie.png";
import decoration from "../assets/decoration.png";

const Claim = () => {
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
            <div className="button-container"><button className="btn-black">Free</button></div>
          </div>
          <div className="claim-card mt">
            <img src={goldenCookie} alt="Golden Cookie" />
            <div className="claim-card__text">
              <h2>Golden Cookie</h2>
              <p>This NFT will give you extra benefits inside CookieDAO</p>
            </div>
            <div className="button-container"><button className="btn-black">$100 COOKIE</button></div>
          </div>
        </div>
      </div>
      <img className="decoration" src={decoration} alt="Cookie decoration" />
    </div>
  );
};

export default Claim;
