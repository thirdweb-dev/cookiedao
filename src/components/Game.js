import { useEffect, useState } from "react";
import chocolateCookie from "../assets/chocolate-cookie.png";

export const Game = ({ setOpen }) => {
  const [time, setTime] = useState(5);
  const [gameOver, setGameOver] = useState(false);
  const [cookiePosition, setCookiePosition] = useState({ top: "15%", left: "50%" });
  const [score, setScore] = useState(0);

  useEffect(() => {
    const unsubscribe = setInterval(() => {
      setTime(time => time > 0 ? time - 1 : 0);
    }, 1000);
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (time === 0) setGameOver(true);
  }, [time]);

  useEffect(() => {
    if (gameOver) {
      setCookiePosition({ display: 'none' });
    }
  }, [gameOver]);

  const handleClick = () => {
    setScore(score => score + 1);
    setCookiePosition({
      top: `${Math.floor(Math.random() * 90)}%`,
      left: `${Math.floor(Math.random() * 90)}%`
    });
  };

  const redeemCookies = () => {
    setOpen(false);
  };

  return (
    <div className="game">
      <div className="overlay" />
      <div className="game-container">
        <img src={chocolateCookie} alt="Chocolate Cookie" style={{ ...cookiePosition }} onClick={handleClick} />
        {gameOver ?
          <div className="game-over">
            <h2>Game over!</h2>
            <p>You clicked {score} cookies!</p>
            <p>You can now redeem that for {score} $COOKIE tokens</p>
            <button className="btn-black" onClick={redeemCookies}>Redeem</button>
          </div>
          :
          <>
            <h2 className="score">{score} points</h2>
            <h2 className="timer">Time left: {time}s</h2>
          </>
        }
      </div>
    </div>
  );
};