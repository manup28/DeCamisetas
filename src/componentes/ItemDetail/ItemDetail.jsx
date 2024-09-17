import React from 'react'
import "./ItemDetail.css"

const ItemDetail = ({id, nombre, precio, img, descripcion}) => {

  return (
    <div className='Contenedor'>
        <div className='Item'>
            <h2>Club: {nombre} </h2>
            <h3>Precio: {precio} </h3>
            <p>ID: {id}</p>
            <img src={img} alt={nombre} />
            <p>{descripcion}</p>
        </div>
    </div>
    
  )
}

export default ItemDetail