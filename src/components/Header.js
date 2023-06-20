import MainLogo from "../assets/MainLogo.png"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <Link to="/"><img src={MainLogo} alt="Logo" className="logo"/></Link>
           <h1>Porfolio Produktů</h1>
        </header>
    )
}

export default Header