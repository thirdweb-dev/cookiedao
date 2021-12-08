import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import { useState } from 'react';
import './App.css';
import { LandingScreen } from './components/LandingScreen';
import { ClaimScreen } from './components/ClaimScreen';
import { GameScreen } from './components/GameScreen';
import { Header } from './components/Header';

const App = () => {
  const [screen, setScreen] = useState("landing");

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

  const supportedChainIds = [1, 4, 137];
  const connectors = {
    injected: {},
    walletconnect: {},
    walletlink: {
      appName: "thirdweb - demo",
      url: "https://thirdweb.com",
      darkMode: false,
    },
  };

  return (
    <ThirdwebWeb3Provider
      connectors={connectors}
      supportedChainIds={supportedChainIds}
    >
      <div>
        <Header setScreen={setScreen} />
        {screenToShow()}
      </div>
    </ThirdwebWeb3Provider>
  );
};

export default App;
