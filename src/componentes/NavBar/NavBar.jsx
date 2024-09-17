import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (

    <header>
        <Link to="/"><h1>DeCamisetas</h1></Link>
        
        <nav>
            <ul>
                <li> <NavLink to="/"> Home </NavLink></li>
                <li> <NavLink className='arg' to="/categoria/arg"> Argentina </NavLink></li>
                <li> <NavLink className='ing' to="/categoria/ing"> Inglaterra </NavLink></li>
                <li> <NavLink className='ita' to="/categoria/ita"> Italia </NavLink></li>
                <li> <NavLink className='esp' to="/categoria/esp"> España </NavLink></li>
            </ul>
        </nav>

        <CartWidget/>
    </header>

  )
}

export default NavBar
