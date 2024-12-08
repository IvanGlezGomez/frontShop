import React, { useEffect, useState } from "react"
import SearchElement from "./SearchElement"
import axios from "axios"


const Search = () => {
    const [query, setQuery] = useState("")
    const [products, setProducts] = useState(null)
    const url = import.meta.env.VITE_API_URL + 'search'

    const findProducts = async () => {
        try {
            const res = await axios.get(url, { params: { query } })
            setProducts(res.data)
        } catch (error) {
            console.error('Error al conseguir los productos', error)
        }
    }

    useEffect(() => {
        if (query === "") {
            setProducts(null)
        } else {
            findProducts()
        }
    }, [query, products])

    return (
        <div>
            <input 
                type="text" 
                value={query} 
                onChange={e => setQuery(e.target.value)} 
                placeholder="Añade ISBN, título, autor o género"
            />
            <div>
                {products && products.map(ele => (
                    <SearchElement key={ele._id} product={ele} />
                ))}
            </div>
        </div>
    )
}

export default Search
