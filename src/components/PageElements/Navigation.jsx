import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <>
        <nav>
            <ul>
                <li><Link to="/genre/ficcion">Ficción</Link></li>
                <li><Link to="/genre/noficcion">No Ficción</Link></li>
                <li><Link to="/genre/infantil">Infantil</Link></li>
                <li><Link to="/genre/juvenil">Juvenil</Link></li>
                <li><Link to="/genre/comic">Comic y Manga</Link></li>
                <li><Link to="english">English books</Link></li>
                <li><Link to="#">Papeleria</Link></li>
                <li><Link to="/addProduct">Añadir producto</Link></li>
            </ul>
        </nav>
        </>
    )
}

export default Navigation