import { useState } from 'react';
import './App.css';
import { LandingScreen } from './components/LandingScreen';
import { ClaimScreen } from './components/ClaimScreen';
import { GameScreen } from './components/GameScreen';
import { Header } from './components/Header';

const App = () => {
  const [screen, setScreen] = useState("game");

  const screenToShow = () => {
    switch (screen) {
      case "landing":
        return <LandingScreen />;
      case "game":
        return <GameScreen />;
      case "claim":
        return <ClaimScreen />;
      default:
        return <LandingScreen />;
    }
  };

  return (
    <div>
      <Header setScreen={setScreen} />
      {screenToShow()}

    </div>
  );
};

export default App;
