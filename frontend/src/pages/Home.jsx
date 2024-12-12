import React from 'react'
import logo from '../assets/logo/logo.png'

const Home = () => {
  return (
    <div>
      <div className='h-screen pt-5 pl-5 flex justify-between flex-col w-full bg-yellow-400'>
        <img className='h-15 w-20' src={logo} alt="Logo" />
        <div className='bg-white'>
          <h2>Meet your favourites ones with Safar</h2>
          <button>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Home