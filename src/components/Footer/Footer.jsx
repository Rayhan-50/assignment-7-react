import React from 'react';

const Footer = () => {
  return (
    
    <div className=''>
      
      <div className="w-3/5 mt-10 mx-auto p-20 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-center rounded-md ">
        <h1 className="text-3xl font-semibold py-2">Subscribe to our Newsletter</h1>
        <p className="text-xl font-light py-2">Get the latest updates and news right in your inbox!</p>
        
        {/* Input Field */}
        <div className="flex justify-center mt-4">
          <label className="input input-bordered flex items-center gap-2 w-full max-w-md">
            <input 
              type="text" 
              className="grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email" 
            />
            <button className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition-colors">
              Subscribe
            </button>
          </label>
        </div>
      </div>


      <footer className="footer bg-black text-white pt-40 pl-20 ">
  <nav>
    <h6 className="footer-title text-2xl">About Us</h6>
   <p className=''>We are a passionate team <br />dedicated to providing the best <br /> services to our customers.</p>
  </nav>
  <nav>
    <h6 className="footer-title text-2xl">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title text-2xl">Social</h6>
    <div className="flex justify-center mt-4">
          <label className="input input-bordered flex items-center gap-2 w-full max-w-md">
            <input 
              type="text" 
              className="grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email" 
            />
            <button className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition-colors">
              Subscribe
            </button>
          </label>
        </div>
  </nav>
</footer>
    </div>
  );
};

export default Footer;
