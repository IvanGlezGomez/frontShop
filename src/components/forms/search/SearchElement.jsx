import { Link } from "react-router-dom"

const SearchElement = ({ product }) => {
    return(<>
        <div className="searchelement"><Link to={'/' + product._id}><h2>{product.name}</h2></Link></div>
    </>)
}

export default SearchElement