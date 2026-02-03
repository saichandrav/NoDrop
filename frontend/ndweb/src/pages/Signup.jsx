import React, { useState } from 'react'
import logo from '../assets/1.png'
import { Link } from 'react-router-dom'
import { BsGoogle } from 'react-icons/bs';
import { FaFacebook } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";




const Signin = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle signin logic here
    console.log('Sign in:', { username, password, email, confirmPassword } )
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-r from-neutral-900 to-blue-950  relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-1/2 h-1/2 bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-1/2 h-1/2 bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Glass Card */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col md:flex-row shadow-2xl rounded-3xl overflow-hidden border border-white/5 bg-white/5 backdrop-blur-xl m-4">

        {/* Left Side: Visual/Logo Area */}
        <div className="w-full md:w-1/2 p-10 flex flex-col items-center justify-center bg-linear-to-br from-blue-900/40 to-black/40 border-b md:border-b-0 md:border-r border-white/5 relative">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
          <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
            <Link to="/">
              <img
                src={logo}
                alt="No Drop Logo"
                className="w-48 drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]"
              />
            </Link>
          </div>
          <p className="mt-2 text-blue-200/60 text-sm tracking-wider uppercase">Premium Water Delivery</p>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center bg-black/40">
          <h3 className="text-2xl font-semibold text-white mb-2">Create a New Account</h3>
          <p className="text-gray-400 mb-8 text-sm">Enter your details to access your dashboard.</p>

          <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
            <div className="group">
              <label className="block text-xs text-blue-300/80 uppercase tracking-widest mb-2 ml-1">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder='Enter your username'
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-blue-900/10 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300"
              />
            </div>
            <div className="group">
              <label className="block text-xs text-blue-300/80 uppercase tracking-widest mb-2 ml-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                email
                placeholder='Enter your email'
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-blue-900/10 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300"
              />
            </div>

            <div className="group">
              <label className="block text-xs text-blue-300/80 uppercase tracking-widest mb-2 ml-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder='••••••••'
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-blue-900/10 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300"
              />
            </div>
            <div className="group">
              <label className="block text-xs text-blue-300/80 uppercase tracking-widest mb-2 ml-1">Confirm Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder='••••••••'
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-blue-900/10 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300"
              />
            </div>

            <button
              type="submit"
              className="mt-4 w-full bg-linear-to-r from-blue-600 to-cyan-500 text-white font-medium py-3.5 rounded-xl shadow-[0_5px_20px_rgba(6,182,212,0.25)] hover:shadow-[0_5px_30px_rgba(6,182,212,0.4)] hover:brightness-110 active:scale-[0.98] transition-all duration-300"
            >
              register
            </button>
            <div className="flex items-center justify-center text-white">
              <Link to="/google">
              <BsGoogle size={24} />
              </Link>
              <Link to="/facebook">
              <FaFacebook size={24} className="ml-6"/>
              </Link>
                <Link to="/email">
                <SiGmail size={24} className="ml-6"/>
                </Link>
            </div>


            <p className="text-center text-sm text-gray-500 mt-4">
              Already have an account? <Link to="/signin" className="text-cyan-400 hover:text-cyan-300 transition-colors">Sign in</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signin