import { useState, useEffect } from "react"
import CardProduct from "./CardProduct"
import axios from "axios"

const SliderProduct = ( {query} ) => {
    const [products, setProducts] = useState(null)
    const url = import.meta.env.VITE_API_URL

    const findProducts = async () => {
        try {
            const res = await axios.get(url + "type", { params: { query } } )
            setProducts(res.data)
        } catch (error) {
            console.error('Error al conseguir los productos', error)
        }
    }

    useEffect(() => {
        findProducts()
    }, [])

    return(
        <div className="sliderproducts">
            <h2>{query.toUpperCase()}</h2>
            <ul>
                {products && products.map((ele,i) => {
                    if(i < 4){
                        return <li key={ele._id}><CardProduct product={ele} /></li>
                    }
                })}
            </ul>
        </div>
    )
}

export default SliderProduct