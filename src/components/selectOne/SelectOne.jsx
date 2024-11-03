
import { MdDelete } from "react-icons/md";

const SelectOne = ({ player, onDelete }) => {
    const { name, rating, price, batting_style, type, country, img } = player;

    return (
        <div className="bg-slate-500 shadow-xl p-5 rounded-xl w-3/5 mx-auto flex items-center gap-5">
            <img className="w-20 rounded" src={img} alt={`${name}`} />
            <div>
                <h1 className="text-2xl font-semibold">{name}</h1>
                <p>Batting Style: {batting_style}</p>
                <p>Price: {price}</p>
            </div>
            <button className="text-4xl ml-auto text-red-800" onClick={onDelete}>
                <MdDelete />
            </button>
        </div>
    );
};

export default SelectOne;
