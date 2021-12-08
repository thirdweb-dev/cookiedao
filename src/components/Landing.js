import decoration from "../assets/decoration.png";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing__text">
        <h1>CookieDao</h1>
        <h2>The best DAO for cookie lovers</h2>
        <p>Join thousand other developers in the best DAO for JavaScript developers.</p>
        <div>
          <button className="btn-black">Connect Wallet</button>
        </div>
      </div>
      <img src={decoration} alt="Cookie decoration" />
    </div>
  );
};

export default Landing;
