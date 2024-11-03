import nav from '../../assets/logo.png';

const Header = ({ coinCount }) => {
    return (
        <div className='flex justify-between md:w-5/6 mx-auto my-5'>
            <img src={nav} alt="" />
            <ul className='flex gap-4 text-xl font-extralight justify-center items-center'>
                <li>Home</li>
                <li>Fixture</li>
                <li>Teams</li>
                <li>Schedules</li>
                <li>
                    <button className='p-2 text-red-500 bg-slate-400 rounded'>
                        <span>{coinCount}</span> coins
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Header;
