
import { useState, useEffect } from "react";
import Button from "../Button/Button";

export default function ItemCount(props){
    const [count, setCount] = useState(props.initialValue || 0);

    useEffect(() => {
        setCount(props.initialValue || 0);
    }, [props.initialValue]);

    function handleAdd() {
        setCount(count + 1);
    }

    function handleSubstract() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    function handleAddToCart() {
        props.onAddToCart(count);
    }

    return (
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div>
                <Button type="button" className="btn btn-outline-dark" onClick={handleSubstract}>-</Button>
                <span className="text-black"> {count} </span>
                <Button type="button" className="btn btn-outline-dark" onClick={handleAdd}>+</Button>
            </div>
            {!props.hideAddToCart && (
                <div>
                    <Button onClick={handleAddToCart} type="button" className="btn btn-primary">Agregar al Carrito</Button>
                </div>
            )}
        </div>
    )
}

