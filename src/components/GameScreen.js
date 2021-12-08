import { useState } from "react";
import decoration from "../assets/decoration.png";
import { Game } from "./Game";

export const GameScreen = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="game-screen">
        <h1>Cookie Clicker</h1>
        <h2>Earn <span className="color-cookie">$COOKIE</span> by clicking the cookies
          that will appear on the screen.</h2>
        <button className="btn-black" onClick={() => setOpen(!open)}>Play</button>
      </div>
      <img className="decoration" src={decoration} alt="Cookie decoration" />
      {open && <Game setOpen={setOpen} />}
    </div>
  );
};
