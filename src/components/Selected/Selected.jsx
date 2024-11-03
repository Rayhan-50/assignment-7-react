
import SelectOne from "../selectOne/SelectOne";

const Selected = ({ selectedPlayers, onDeletePlayer,setShowComponentOne ,selectedCount}) => {
    return (
        <div>
            <div className="flex justify-between w-4/5 mx-auto py-10">
                <h1 className="text-4xl my-5 font-bold w-4/5 mx-auto">{`Selected Players ${selectedCount}/6`}</h1>
                <div className="flex gap-10 text-3xl">
                    <button
                        className="p-3 rounded-xl "
                        onClick={() => setShowComponentOne(true)} 
                    >
                        Available
                    </button>
                    <button
                        className="p-3  bg-yellow-400"
                        onClick={() => setShowComponentOne(false)} 
                    >
                        Selected ({selectedCount})
                    </button>
                </div>
            </div>
            
            <div className="flex flex-col gap-5">
                {selectedPlayers.map(player => (
                    <SelectOne 
                        key={player.id} 
                        player={player} 
                        onDelete={() => onDeletePlayer(player.id)} 
                    />
                ))}
            </div>
            <div className="ml-20">
            <button  onClick={() => setShowComponentOne(true)} className="p-2 bg-yellow-400 rounded-xl text-white">ADD More Player</button>
            </div>
           
        </div>
    );
};

export default Selected;







