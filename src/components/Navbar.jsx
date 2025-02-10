import React from 'react'
import '../styles/Navbar.css'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className='navbar'>
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/about')}>About</button>
    </div>
  )
}
