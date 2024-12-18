import React from 'react'
import logo from '../assets/logo/logo.png'
import { Link } from 'react-router-dom'
const Userlogin = () => {
  return (
    <div className='p-7'>
      <div>
      <img className='w-16 mb-10' src={logo} alt="" />
      <form>
        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input required className='bg-[#f2f2f2] mb-7 rounded px-4 py-2 border w-full text-lg placeholde:text-base,' type="text" placeholder='name@example.com' />
        <h3 className='text-lg font-medium mb-2'>Enter your password</h3>
        <input required className='bg-[#f2f2f2] mb-7 rounded px-4 py-2 border w-full text-lg placeholde:text-base,'  type="passowrd" placeholder='password' />
        <button className='bg-[#111] text-white font-bold mb-7 rounded px-4 py-2  w-full text-lg font-medium placeholde:text-base '>Login Now</button>
        <p>New here? No Worries! <Link className='text-blue-600'>Create a new account</Link></p>
      </form>
      </div>
      <div>
        <button className='bg-[#22aa44] text-black font-bold mb-7 rounded px-4 py-2  w-full text-lg font-medium placeholde:text-base '> Sign in as a Captain</button>
      </div>
    </div>
  )
}

export default Userlogin