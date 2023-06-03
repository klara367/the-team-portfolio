import MainLogo from "../assets/MainLogo.png"
import "./Header.css"

const Header = () => {
    return (
        <header>
            <h1>Porfolio Produktů</h1>
            <img src={MainLogo} alt="Logo" className="logo"/>
        </header>
    )
}

export default Header