import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <div className="container header-container">
                <h1>Shop</h1>
                <div className="nav">
                    <nav>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/cart'}>Cart</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header