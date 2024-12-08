import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CardProduct from "../../Elements/CardProduct"
import axios from "axios"

const PageByGenre = () => {
    const [products, setProducts] = useState(null)
    const { query } = useParams()
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
    }, [query])

    return(
        <div className="allproducts">
            <h2>{query.toUpperCase()}</h2>
            <ul>
                {products && products.map((ele,i) => {
                    if(i < 5){
                        return <li key={ele._id}><CardProduct product={ele} /></li>
                    }
                })}
            </ul>
        </div>
    )
}

export default PageByGenre