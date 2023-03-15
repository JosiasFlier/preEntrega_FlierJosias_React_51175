import EmojiCart from "../EmojiCart";
import "./navbar.css";

function NavBar() {
    return (
        <div className="style-navbar">
            <img src="/imgs/logo.png" className="style-logo" alt="Logo" />
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand"></a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span classNameName="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarNavAltMarkup"
                    >
                        <div className="navbar-nav">
                            {/* la idea es que tenga el active, lo pondré mas adelante */}
                            <a
                                className="nav-link"
                                aria-current="page"
                                href="index.html"
                            >
                                NACIONALES
                            </a>
                            <a
                                className="nav-link"
                                href="pages/internacionales.html"
                            >
                                INTERNACIONALES
                            </a>
                            <a className="nav-link" href="pages/retros.html">
                                RETROS
                            </a>
                            <a className="nav-link" href="pages/contacto.html">
                                CONTACTO
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            <EmojiCart />
        </div>
    );
}
export default NavBar;
