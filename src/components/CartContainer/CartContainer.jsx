import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import Button from "../Button/Button";
import FormCheckout from "./FormCheckout";
import { Link } from "react-router-dom";
import "./cartContainer.css";
import { createOrder } from "../../services/firestore";

// --------------SWEETALERT2---------------------------------
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

// --------------SWEETALERT2---------------------------------

function CartContainer() {
    const context = useContext(cartContext);
    const cart = context.cart;
    const removeItem = context.removeItem;

    // Creo una funcion con el valor total del carrito, que multiplica cada valor del producto por su cantidad, y va sumando (Reduce) todos los montos totales de los item del carrito
    function calculateTotalCart(cart) {
        return cart.reduce((suma, item) => suma + item.count * item.price, 0);
    }
    const totalCart = calculateTotalCart(cart);

    // Creo una funcion para calcular el total del
    function totalProduct(count, price) {
        const total = count * price;
        return { total };
    }

    // Creo una funcion para crear una Orden de compra
    async function handleCheckout(userData) {
        const order = {
            itmes: cart,
            buyer: userData,
            total: totalCart,
            date: new Date(),
        };

        
        const orderId = await createOrder(order);

        // Limpio el carrito de compras luego de finalizar compra
        context.clearCart();

        const orderComplete = await MySwal.fire({
            title: "Gracias por tu compra " + userData.username,
            html:
                "<p>N° de transacción: " +
                orderId +
                "</p>" +
                "<p>El total de tu compra es de $ " + totalCart + "</p>",
            width: 700,
            padding: "3em",
            color: "rgba(104,5,29,0.9)",
            background: "#fff",
            backdrop: "rgba(5,7,6,0.8)",
            icon: "success",
        });
    }
    

    return (
        <div className="container">
            {cart.length === 0 ? (
                <>
                    <h1 className="mt-4">Tu Carrito está vacio</h1>
                    <img
                        src="https://i.ibb.co/82j87bz/empty-cart.png"
                        alt="Empty Cart"
                        className="empty-cart img-fluid w-50 mx-auto"
                    />
                    <div className="mt-5">
                        <Link  to="/">
                            <Button className="btn btn-secondary btn-lg btn-block">Volver a la pantalla de inicio</Button>
                        </Link>
                    </div>
                </>
            ) : (
                <>
                    <h1 className="cart-title mt-4">CARRITO DE COMPRAS</h1>
                    <table className="table cart-table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Camiseta</th>
                                <th scope="col">Titulo</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Remover</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody className="cart-body">
                            {cart.map((item) => (
                                <tr key={item.id}>
                                    <td>
                                        <img
                                            height={50}
                                            src={item.image}
                                            alt={item.title}
                                        />
                                    </td>
                                    <td>{item.title}</td>
                                    <td>$ {item.price}</td>
                                    <td>{item.count}</td>
                                    <td>
                                        <Button
                                            className="btn btn-danger"
                                            onClick={() => removeItem(item.id)}
                                        >
                                            X
                                        </Button>
                                    </td>
                                    <th>
                                        $
                                        {
                                            totalProduct(item.count, item.price)
                                                .total
                                        }
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="cartList_detail cartList-bg">
                        <h4>El precio total de tu compra es de ${totalCart}</h4>
                    </div>
                    <FormCheckout
                        onClick={handleCheckout}
                        className="btn btn-primary"
                    >
                        Finalizar Compra
                    </FormCheckout>
                </>
            )}
        </div>
    );
}

export default CartContainer;

