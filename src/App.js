import { useState } from 'react';
import './App.css';
import Claim from './components/Claim';
import Game from './components/Game';
import Header from './components/Header';
import Landing from './components/Landing';

const App = () => {
  const [screen, setScreen] = useState("landing");

  const screenToShow = () => {
    switch (screen) {
      case "landing":
        return <Landing />;
      case "game":
        return <Game />;
      case "claim":
        return <Claim />;
      default:
        return <Landing />;
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
