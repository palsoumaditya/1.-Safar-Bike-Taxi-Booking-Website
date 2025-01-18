import React from 'react';
import logo from '../assets/logo/logo.png';
import home from '../assets/home/home.jpg';
import { Link } from 'react-router-dom';

// Placeholder for Userlogin, replace with the actual path
const Userlogin = '/login';

const Home = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${home})`,
        backgroundSize: 'cover', // Ensures the image covers the full page by default
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay Section */}
      <div className="absolute inset-0 flex flex-col justify-between">
        {/* Logo Section */}
        <div className="absolute top-8 left-8">
          <img className="h-20 w-auto" src={logo} alt="Logo" />
        </div>

        {/* Content Section */}
        <div className="absolute bottom-0 w-full bg-white bg-opacity-90 py-6 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-5">
            Meet your favourites ones with Safar
          </h2>
          <Link
            to={Userlogin}
            className="flex items-center justify-center w-full bg-black text-white py-3 rounded"
          >
            Continue
          </Link>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          div[style] {
            background-size: contain !important; /* Adjust for smaller screens */
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
