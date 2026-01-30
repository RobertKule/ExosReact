import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <>
        <nav className='flex justify-between items-center p-8 bg-slate-100'>
      <h1 className='text-2xl font-bold text-blue-800'>
        Cours React
      </h1>
      <ul className='flex justify-center gap-8'>
        <li><Link className='text-md hover:text-blue-700' to="/">Accueil</Link></li>
        <li><Link className='text-md hover:text-blue-700' to="/about">About</Link></li>
      </ul>
    </nav>
        </>
    )
}

export default Header
