import { useContext } from "react"
import { GlobalContext } from "../Context/GlobalContext"

const SingleProduct = ({ product }) => {
    const {cart, setCart} = useContext(GlobalContext)

    const addToCart = () => {
        setCart([...cart, product._id])
    }

    return(
        <> 
            <div>
                <img src='#' alt={`${product.name} image`}/>
            </div>
            <div>
                <h3>{product.name}</h3>
                <h4>{product.price}</h4>
                {product.stock > 0 ? <span className="instock">En stock</span> : <span className="outstock">Sin stock</span>}
                <button onClick={addToCart}>Añadir al carrito</button>
            </div>
        </>
    )
}

export default SingleProduct