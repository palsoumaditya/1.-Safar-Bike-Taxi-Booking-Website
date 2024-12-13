import React from 'react';
import logo from '../assets/logo/logo.png';
import home from '../assets/home/home.jpg';
import { Link } from 'react-router-dom';

// Placeholder for Userlogin, replace with the actual path
const Userlogin = '/login';

const Home = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Section */}
      <div
        className="absolute h-full w-full"
        style={{
          backgroundImage: `url(${home})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Logo Section */}
      <div className="absolute top-8 left-8 z-20 bg-white p-2">
        <img className="h-15 w-20" src={logo} alt="Logo" />
      </div>

      {/* Content at the bottom */}
      <div className="absolute bottom-0 left-0 w-full bg-white pb-7 px-4 py-4 z-10">
        <h2 className="text-3xl font-bold text-center">Meet your favourites ones with Safar</h2>
        <Link to={Userlogin} className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5">Continue</Link>
      </div>
    </div>
  );
};

export default Home;