import { Link } from "react-router-dom"
import "./Error.css"

const Error = () => {
    return (
        <main className="error-main">
            <h2>404</h2>
            <p>Stránka nenalezena</p>
            <Link to={`/`} className="back-btn">Hlavní strana</Link>
        </main>
    )
}

export default Error