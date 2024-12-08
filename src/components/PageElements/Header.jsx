import { Link } from "react-router-dom"
import Search from "../forms/search/Search"
import Navigation from "./Navigation"
import UserSVG from "../../svg/UserSVG.jsx"
import CartSVG from "../../svg/CartSVG.jsx"

const Header = () => {
    return(
        <header>
            <div>
                <Link to={'/'}><img src="../../../public/darklogo.png" alt="pazos logo"/></Link>
                <Search />
                <div className="usercart">
                    <UserSVG />
                    <CartSVG />
                </div>
            </div>
            <Navigation />
        </header>
    )
}

export default Header