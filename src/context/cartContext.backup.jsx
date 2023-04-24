import { createContext, useState } from 'react';


// Creo un Contexto
const cartContext = createContext()
// Saco el Provider de adentro del contexto
const Provider = cartContext.Provider;

// inmutable
// Crear funcion agregar al carrito

// Custom Provider, creamos un componente para no tener todo en app,
// y porque necesitamos tener estado, por eso creamos el componente
// creamos el estado, renderizamos el provider

function CartProvider(props){
    const [ cart, setCart] = useState([]);

    function addItem(product, count){
        // Creo unn nuevo array con spread para no modificar el originial
        const newCart = [...cart];
        // El pusheo se lo hago al nuevo array
        newCart.push({ ...product, count})
        // Seteo el carrito al array original
        setCart(newCart);
    }

    // Creo una funcion, que recorre el array cart, y devuelve
    // la suma de la propiedad count de cada elemento del array
    // Osea, cuenta la cantidad total de productos que hay en el carrito
    function countItems() {
        let totalCount = 0;
            cart.forEach((item) => {
            totalCount += item.count;
        });
        // Retorna la cantidad total de productos del carrito.
        return totalCount;
    }

    return(
        <Provider value={{ cart, addItem, countItems}}>
            {props.children}
        </Provider>

    )
}

export { cartContext, CartProvider};