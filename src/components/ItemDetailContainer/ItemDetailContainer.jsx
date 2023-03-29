// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// /* ------------- Mock async Service -------------------  */
// import productsData from "../../data/products";

// function getSingleItem(idURL) {
//     const promesa = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const itemRequested = productsData.find((item) => {
//                 return item.id === parseInt(idURL);
//             });
//             resolve(itemRequested);
//         }, 1000);
//     });

//     return promesa;
// }
// /* ------------------------------------------------- */

// function ItemDetailContainer() {
//     const [product, setProduct] = useState([]);

//     /* { id: num } */

//     let { cityid } = useParams();
//     console.log(cityid);

//     useEffect(() => {
//         getSingleItem(cityid).then((respuesta) => {
//             console.log("promesa cumplida", respuesta);

//             setProduct(respuesta);
//         });
//     }, []);

//     /* return <ItemDetail .... /> */

//     return (
//         <div>
//             <img src={product.img}></img>
//             <h1>{product.title}</h1>
//             <h3>{product.category}</h3>
//             <p>Precio: ${product.price}</p>
//         </div>
//     );
// }

// export default ItemDetailContainer;

import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

/* ------------- Mock async Service -------------------  */
import productsData from "../../data/products";

function getSingleItem(idURL) {
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const requestedItem = productsData.find( item => {
            return (item.id === parseInt(idURL))
        })
      resolve(requestedItem);
    }, 200);
  });

  return promesa;
}
/* ------------------------------------------------- */

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);

  let { id } = useParams();
  console.log(id);

  useEffect(() => {
    getSingleItem(id).then((respuesta) => {
      console.log("promesa cumplida", respuesta);

      setProduct(respuesta);
    });
  }, []);

  /* return <ItemDetail .... /> */

  return (
    <ItemDetail product={product}/>
  );
}

export default ItemDetailContainer;