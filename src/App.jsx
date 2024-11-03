
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Players from './components/Players/Players';
import Selected from './components/Selected/Selected';

function App() {
  const [coinCount, setCoinCount] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [showComponentOne, setShowComponentOne] = useState(true);
  const squadLimit = 6;

  const increaseCoinCount = () => {
    setCoinCount(coinCount + 600000);
    toast.success("Congratulation Coins added! Successfully");
  };

  const choosePlayer = (player) => {
    if (selectedPlayers.some((p) => p.id === player.id)) {
      toast.error("Player already selected");
      return;
    }

    if (selectedPlayers.length >= squadLimit) {
      toast.warn("Squad is full");
      return;
    }

    if (coinCount <= 0) {
      toast.error("You don't have enough coins to choose a player! Sorry");
      return;
    }

    const playerCost = player.price;
    if (coinCount >= playerCost) {
      setCoinCount(coinCount - playerCost);
      setSelectedPlayers((prev) => [...prev, player]);
      toast.success(`Congratulation ${player.name} selected!`);
    } else {
      toast.error("You don't have enough coins to choose this player! Sorry");
    }
  };

  const handleDeletePlayer = (playerId) => {
    setSelectedPlayers(selectedPlayers.filter(player => player.id !== playerId));
    toast.info("Player removed from selection.");
  };

  return (
    <>
      <Header coinCount={coinCount} />
      <Banner increaseCoinCount={increaseCoinCount} />

      {showComponentOne ? (
        <Players choosePlayer={choosePlayer} setShowComponentOne={setShowComponentOne} selectedCount={selectedPlayers.length} />
      ) : (
        <Selected selectedPlayers={selectedPlayers} selectedCount={selectedPlayers.length}  onDeletePlayer={handleDeletePlayer} setShowComponentOne={setShowComponentOne}/>
      )}

      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;

