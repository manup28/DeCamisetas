import React from 'react'
import "./ItemDetail.css"
import Contador from '../Contador/Contador'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'
import { toast } from 'react-toastify';

const ItemDetail = ({id, nombre, precio, img, descripcion, stock}) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0)

  const {agregarAlCarrito} = useContext(CarritoContext)

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = {id, nombre, precio}
    agregarAlCarrito (item, cantidad)
    toast.success("Su producto fue agregado al carrito",{autoClose:1500, theme: "colored", position: "top-right"})

  }

  return (
    <div className='Contenedor'>
        <div className='Item'>
            <h2>Club: {nombre} </h2>
            <h3>Precio: {precio} </h3>
            <p>ID: {id}</p>
            <img src={img} alt={nombre} />
            <p>{descripcion}</p>
            <p>Stock: {stock}</p>

            <div className='boton'>
            {
              agregarCantidad > 0 ? (<Link to="/cart"> Terminar Compra</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
            }
            </div>

        </div>
    </div>
    
  )
}

export default ItemDetail