
import { useEffect, useState } from "react";
import Player from "../Player/Player";

const Players = ({ choosePlayer, setShowComponentOne ,selectedCount }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('players.json')
      .then(res => res.json())
      .then(data => setPlayers(data));
  }, []);

  return (
    <div>
      <div className="flex justify-between w-4/5 mx-auto py-10">
        <h1 className="text-5xl font-bold">Available Players</h1>
        <div className="flex gap-10 text-3xl">
          <button
            className="p-3 bg-yellow-400 rounded-xl text-white"
            onClick={() => setShowComponentOne(true)} 
          >
            Available
          </button>
          <button
            className="p-3"
            onClick={() => setShowComponentOne(false)} 
          >
             Selected ({selectedCount})
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 mx-auto w-4/5 gap-3">
        {players.map(player => (
          <Player key={player.id} player={player} choosePlayer={choosePlayer} />
        ))}
      </div>
    </div>
  );
};

export default Players;
