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
    const newCart = [...cart];

    function addItem(product, countFromCounter){
        if (isItemInCart(product.id)) {
            const itemIndex = cart.findIndex((itemInCart) => itemInCart.id === product.id);
            newCart[itemIndex].count += countFromCounter;
        } else {
            newCart.push({...product, count: countFromCounter});
        }
        setCart(newCart);
    }

    function isItemInCart(id) {
        return cart.some(itemInCart => itemInCart.id === id )
    }


    // Creo la funcion para eliminar elementos del carrito
    function removeItem(itemId) {
        const updatedCart = cart.filter(item => item.id !== itemId);
        setCart(updatedCart);
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
        <Provider value={{ cart, addItem, isItemInCart, countItems, removeItem}}>
            {props.children}
        </Provider>

    )
}

export { cartContext, CartProvider};