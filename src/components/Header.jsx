import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav className="flex justify-between items-center p-6 bg-slate-100 shadow-md">
            <h1 className="text-2xl font-bold text-blue-800">
                <Link className="hover:text-blue-700" to="/">Cours React</Link>
            </h1>
            <ul className="flex gap-6">
                <li><Link className="text-md hover:text-blue-700" to="/">Accueil</Link></li>
                <li><Link className="text-md hover:text-blue-700" to="/about">About</Link></li>
                <li><Link className="text-md hover:text-blue-700" to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Header
