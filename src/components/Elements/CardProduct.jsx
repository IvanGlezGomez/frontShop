import { useContext } from "react"
import { GlobalContext } from "../Context/GlobalContext"
import { Link } from "react-router-dom"

const CardProduct = ({ product }) => {
    const {cart, setCart} = useContext(GlobalContext)

    const addToCart = () => {
        setCart([...cart, product._id])
    }

    return(
        <div className='cart'> 
            <Link to={'/' + product._id} >
                <div className="details">
                    <img src={product.image} alt={`${product.name} image`} />
                    <h3>{product.name}</h3>
                    <div>
                        <h4>{product.price}€</h4>
                        {product.stock > 0 ? <span className="instock">En stock</span> : <span className="outstock">Sin stock</span>}
                    </div>
                </div>
            </Link>
            <div className="buttonsCard">
                <button onClick={addToCart}>Añadir al carrito</button>
                <Link to={'/' + product._id}>Ver detalles</Link>
            </div>
        </div>
    )
}

export default CardProduct