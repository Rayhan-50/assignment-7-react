import React from 'react';
import bannar from '../../assets/banner-main.png'
import bgShadow from '../../assets/bg-shadow.png'


const Banner = ({ increaseCoinCount }) => {
    return (
        <div className="relative bg-black text-white">
            <div
                className="h-auto w-6/5 pb-4"
                style={{
                    backgroundImage: `url(${bgShadow})`, 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
              <div className='flex justify-center items-center p-5 '>
                
              <img src={bannar} alt="" />
              </div>
              <h2 className='text-center text-4xl font-semibold py-2'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
              <p className='text-center text-4xl font-light py-2'>Beyond Boundaries Beyond Limits</p>
              <div className='flex justify-center items-center  text-white py-5 '>
              <button onClick={increaseCoinCount} className='bg-yellow-500 text-3xl p-3  rounded-2xl'>Claim Free Credit</button>
              </div>
            </div>
        </div>
        
    );
};

export default Banner;
