import React, { useState } from 'react'
import logo from '../assets/logo/logo.png'
import { Link } from 'react-router-dom'

const Captainsignup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [color, setColor] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    const captainData = { firstName, lastName, email, password, color }
    console.log(captainData)
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
    setColor('')
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src={logo} alt="Logo" />
        <form onSubmit={submitHandler} className='flex flex-col gap-4'>
          <h3 className='text-lg font-medium'>What's your Name</h3>
          <div className='flex gap-4'>
            <input
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className='bg-[#f2f2f2] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
              type="text"
              placeholder='Enter your first name'
            />
            <input
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className='bg-[#f2f2f2] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
              type="text"
              placeholder='Enter your last name'
            />
          </div>
          <h3 className='text-lg font-medium'>What's your bike color</h3>
          <input
            required
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className='bg-[#f2f2f2] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="text"
            placeholder='Enter your bike color'
          />
          <h3 className='text-lg font-medium'>What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#f2f2f2] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="text"
            placeholder='name@example.com'
          />
          <h3 className='text-lg font-medium'>Enter your password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-[#f2f2f2] mb-10 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="password"
            placeholder='password'
          />
          <button className='bg-[#111] text-white font-bold mb-7 rounded px-4 py-2 w-full text-lg font-medium'>Sign Up Now</button>
          <p className='text-center'>Already have an account? <Link to="/login" className='text-blue-600'>Login here</Link></p>
        </form>
      </div>
      <div>
        <Link to='/Captainlogin' className='bg-[#22aa44] flex items-center justify-center text-black font-bold mb-7 rounded px-4 py-2 w-full text-lg font-medium mb-5'>Sign in as a Captain</Link>
      </div>
    </div>
  )
}

export default Captainsignup