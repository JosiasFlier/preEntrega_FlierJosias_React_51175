import { Link } from "react-router-dom";
import EmojiCart from "../CartContainer/EmojiCart";
import "./navbar.css";
// import { useContext } from "react";
// import { cartContext } from "../../context/cartContext";

function NavBar() {
    // const { cart } = useContext(cartContext);
    return (
        <div className="style-navbar">
            <Link  to="/">
                <img src="/imgs/logo.png" className="style-logo m-1 p-1" alt="Logo" />
            </Link>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand"></Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" aria-current="page" to="/category/Nacionales">
                                NACIONALES
                            </Link>
                            <Link className="nav-link" to="/category/Internacionales">
                                INTERNACIONALES
                            </Link>
                            <Link className="nav-link" to="/category/Selecciones">
                                SELECCIONES
                            </Link>
                            <Link className="nav-link" to="/category/Retro">
                                RETROS
                            </Link>
                            <Link className="nav-link" to="/cart">
                                CARRITO
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <Link className="nav-link" to="/cart">
                <EmojiCart />
            </Link>
        </div>
    );
}
export default NavBar;
