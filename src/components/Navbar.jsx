import { Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { ThemeToggle } from "./ThemeToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart();

    return (
        <nav className="navbar sticky-top">
            <Container className="d-flex justify-content-between align-items-center">
                <NavLink to="/" className="navbar-brand">
                    <img src="/imgs/logo.svg" alt="Logo" width="30" height="30" />GS
                    <span className="text-primary text-color">Garai's Store</span>
                </NavLink>

                <div className="d-flex align-items-center gap-3">
                    <Nav>
                        <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                            Store
                        </NavLink>
                        <NavLink to="/admin" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                            Admin
                        </NavLink>
                    </Nav>

                    <div className="d-flex align-items-center gap-2">
                        <a 
                            href="https://github.com/Pritam029/Online-Shop.git" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-button"
                            aria-label="GitHub"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a 
                            href="https://github.com/Pritam029" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-button"
                            aria-label="Portfolio"
                        >
                            <FontAwesomeIcon icon={faUser} />
                        </a>
                        <ThemeToggle />
                        <button className="cart-button" onClick={openCart}>
                            <FontAwesomeIcon icon={faShoppingCart} />
                            {cartQuantity > 0 && (
                                <span className="cart-count">{cartQuantity}</span>
                            )}
                        </button>
                    </div>
                </div>
            </Container>
        </nav>
    );
}