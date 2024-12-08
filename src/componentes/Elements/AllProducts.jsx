import { useEffect, useState } from "react";
import CardProduct from "./CardProduct";
import axios from "axios";

const AllProducts = ({ productsName }) => {
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
        <section className="allproducts">
            <h2>{productsName}</h2>
            <ul>
                {products && products.map(ele => <li key={ele._id}><CardProduct product={ele} /></li>)}
            </ul>
        </section>
    )
}

export default AllProducts