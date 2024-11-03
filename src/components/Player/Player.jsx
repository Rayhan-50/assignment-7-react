import PropTypes from 'prop-types';



const Player = ({player ,choosePlayer}) => {
    const {name ,rating ,price ,batting_style,type,country,img}=player;
    return (
        <div className=''>
            <div className="card bg-base-100 gap-6 shadow-xl">
  <figure>
    <img className='w-[300px] rounded-2xl'
      src={img}
      alt="Shoes" />
  </figure>
  <div className="card-body">
   <h1 className='text-2xl font-bold'>{name}</h1> 
   <div className='flex justify-between'>
    <p>{country}</p>
    <button className='bg-slate-300  p-2 shadow-md'>{type}</button>
   </div>
   <hr />
   <div className='flex text-2xl py-2'>
    <p className='font-semibold'>Ratings :</p>
    <p >{rating}</p>
   </div>
   <div className='flex text-2xl py-2'>
    <p className='font-semibold'>Batting Style :</p>
    <p >{batting_style}</p>
   </div>
   <div className='flex text-2xl py-2'>
    <p className='font-semibold'>Price :{price}</p>
    <button onClick={() => choosePlayer(player)} className='bg-slate-400  p-2 rounded-xl text-white text-sm shadow-md'>Choose Player</button>
   </div>
  </div>
</div>
        </div>
    );
};
Player.prototype={
    player: PropTypes.object.isRequired,
    choosePlayer: PropTypes.func.isRequired, 
}
export default Player;