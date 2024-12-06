import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <>
        <nav>
            <ul>
                <li><Link to="#">Ficción</Link></li>
                <li><Link to="#">No Ficción</Link></li>
                <li><Link to="#">Infantil</Link></li>
                <li><Link to="#">Juvenil</Link></li>
                <li><Link to="#">Comic y Manga</Link></li>
                <li><Link to="#">English books</Link></li>
                <li><Link to="#">Papeleria</Link></li>
                <li><Link to="#">Log in</Link></li>
            </ul>
        </nav>
        </>
    )
}

export default Navigation