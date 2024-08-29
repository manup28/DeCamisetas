import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (

    <header>
        <h1>DeCamisetas</h1>

        <nav>
            <ul>
                <li>Argentina</li>
                <li>Inglaterra</li>
                <li>Italia</li>
                <li>España</li>
            </ul>
        </nav>

        <CartWidget/>
    </header>

  )
}

export default NavBar
