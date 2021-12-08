import decoration from "../assets/decoration.png";

const Game = () => {
  return (
    <div>
      <div className="game">
        <h1>Cookie Clicker</h1>
        <h2>Earn <span className="color-cookie">$COOKIE</span> by clicking the cookies
          that will appear on the screen.</h2>
        <button className="btn-black">Click</button>
      </div>
      <img className="decoration" src={decoration} alt="Cookie decoration" />
    </div>
  );
};

export default Game;
