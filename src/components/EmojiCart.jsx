import "./NavBar/navbar.css";
import { useContext } from "react";
import { cartContext } from "../context/cartContext";


function EmojiCart() {
    const { cart, countItems } = useContext(cartContext);
    return (
        <div className="style-cart">
            <span role="img" aria-label="cart">
                🛒
            </span>
            <span>{countItems()}</span>
        </div>
    );
}

export default EmojiCart;
