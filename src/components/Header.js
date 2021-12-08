const Header = ({ setScreen }) => {
  return (
    <header>
      <h2 onClick={() => setScreen("landing")}>CookieDAO</h2>
      <nav>
        <button className="btn-white" onClick={() => setScreen("game")}>Cookie Clicker</button>
        <button className="btn-black" onClick={() => setScreen("claim")}>Claim NFTs</button>
      </nav>
    </header>
  );
};

export default Header;
