import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import { GlobalContext } from "../../Context/GlobalContext"
import axios from "axios"

const SoloProduct = () => {
    const [product, setProduct] = useState(null)
    const { _id } = useParams()
    const url = import.meta.env.VITE_API_URL
    const {cart, setCart} = useContext(GlobalContext)

    const addToCart = () => {
        setCart([...cart, product._id])
    }

    const findProduct = async () => {
        try {
            const res = await axios.get(url + _id)
            setProduct(res.data)
        } catch (error) {
            console.error('Error al conseguir los productos', error)
        }
    }

    useEffect(() => {
        findProduct()
    }, [])

    return (
        <section className="singleproduct">
            {product && 
            <>
                <div><img src={product.image} alt={`${product.name} image`} /></div>
                <div className="infoProduct">
                    <h2>{product.name}</h2>
                    <h4>{product.author}</h4>
                    <span>ISBN: {product.isbn}</span>
                    <h3>Sinopsis de {product.name}</h3>
                    <p>{product.description}</p>
                </div>
                <div className="buyinfo">
                    <div>
                        <span id="priceproduct">{product.price}€</span>
                        <p>Stock: {product.stock}</p>
                        <button onClick={addToCart}>Añadir al carrito</button>
                    </div>
                </div>
            </>
            }
        </section>
    )
}

export default SoloProduct