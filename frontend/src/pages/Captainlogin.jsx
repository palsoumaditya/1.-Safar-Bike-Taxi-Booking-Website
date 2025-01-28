import React, { useState } from 'react'
import logo from '../assets/logo/logo.png'
import { Link } from 'react-router-dom'

const Captainlogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    const captainData = { email, password }
    console.log(captainData)
    setEmail('')
    setPassword('')
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src={logo} alt="" />
        <form onSubmit={submitHandler} className='flex flex-col gap-4'>
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#f2f2f2] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="text"
            placeholder='name@example.com'
          />
          <h3 className='text-lg font-medium mb-2'>Enter your password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-[#f2f2f2] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="password"
            placeholder='password'
          />
          <button className='bg-[#111] text-white font-bold mb-7 rounded px-4 py-2 w-full text-lg font-medium'>Login Now</button>
          <p className='text-center'>Want to Join Safar? <Link to="/Captainsignup" className='text-blue-600'>Create an account Now!</Link></p>
        </form>
      </div>
      <div>
        <Link to='/login' className='bg-[#22aa44] flex items-center justify-center text-black font-bold mb-7 rounded px-4 py-2 w-full text-lg font-medium mb-5'>Sign in as a User</Link>
      </div>
    </div>
  )
}

export default Captainlogin