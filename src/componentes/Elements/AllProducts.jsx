import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import axios from "axios";

const AllProducts = () => {
    const [products, setProducts] = useState(null)
    const url = import.meta.env.VITE_API_URL

    const findProducts = async () => {
        try {
            const res = await axios.get(url)
            setProducts(res.data)
        } catch (error) {
            console.error('Error al conseguir los productos', error)
        }
    }

    useEffect(() => {
        findProducts()
    }, [])

    return (
        <ul>
            {products && products.map(ele => <li key={ele._id}><SingleProduct product={ele} /></li>)}
        </ul>
    )
}

export default AllProducts