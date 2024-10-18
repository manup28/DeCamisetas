import React from 'react'
import './CartWidget.css'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const {cantidadTotal} = useContext(CarritoContext)
  
  return (
    <div>
      <Link to="/cart">
        <img className='carrito' src="https://cdn-icons-png.flaticon.com/128/8146/8146003.png" alt="Carrito" />
      </Link>
      {
        cantidadTotal > 0 && <strong>{cantidadTotal}</strong>
      }
    </div>
  )
}

export default CartWidget
