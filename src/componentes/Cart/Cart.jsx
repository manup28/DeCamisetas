import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import "./Cart.css";


const Cart = () => {
 const {carrito, total, cantidadTotal, vaciarCarrito} = useContext(CarritoContext)

 if (cantidadTotal === 0) {
    return (
        <>
            <div className="cartVacio">
                <h2>En este momento no hay productos en el carrito.</h2>
                <Link to="/" className="botonesFin">Ver Productos</Link>
            </div>
        </>

    )
 }

  return (
    <div>
        {
            carrito.map(producto => <CartItem key={producto.item.id} {...producto}/>)
        }

        <h3>Total: ${total}</h3>
        <h3>Cantidad Total: {cantidadTotal}</h3>
        <div>
            <button onClick={()=> vaciarCarrito()} className="botonesFin"> Vaciar Carrito </button>
        </div>
        <br />
        <div>
            <Link to="/checkout" className="botonesFin">Finalizar Compra</Link>
        </div>
    </div>
  )
}

export default Cart