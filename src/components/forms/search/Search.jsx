import React, { useEffect, useState, useRef } from "react"
import SearchElement from "./SearchElement"
import axios from "axios"


const Search = () => {
    const [query, setQuery] = useState("")
    const [products, setProducts] = useState(null)
    const url = import.meta.env.VITE_API_URL + 'search'
    const findingResults = useRef(null)

    const findProducts = async () => {
        try {
            const res = await axios.get(url, { params: { query } })
            setProducts(res.data)
        } catch (error) {
            console.error('Error al conseguir los productos', error)
        }
    }

    const handleFocus = () => {
        findingResults.current.style.visibility = "visible"
    }

    const handleBlur = () => {
        findingResults.current.style.visibility = "hidden"
    }

    useEffect(() => {
        if (query === "") {
            setProducts(null)
        } else {
            findProducts()
        }
    }, [query, products])

    return (
        <div className="search">
            <div className="pepotillo">
                <input 
                    type="text" 
                    value={query} 
                    onChange={e => setQuery(e.target.value)} 
                    placeholder="Añade ISBN, título, autor o género"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                <div className="searchelements" ref={findingResults}>
                    {products && products.map(ele => (
                        <SearchElement key={ele._id} product={ele} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Search
