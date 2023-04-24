import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import Loader from "../Loader/Loader";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { getSingleItem } from "../../services/firestore";


function ItemDetailContainer() {
  const [product, setProduct] = useState([]);

  let { id } = useParams();
  console.log(id);

  const { cart, addItem} = useContext(cartContext);

  useEffect(() => {
    getSingleItem(id).then((respuesta) => {
      console.log("promesa cumplida", respuesta);

      setProduct(respuesta);
    });
  }, [id]);

  function onAddToCart(count) {
    addItem(product, count);
    console.log('Agregado al Carrito')
  }

  if (product.length === 0) {
    return <Loader/>;
  }

  /* return <ItemDetail .... /> */

  return (
    <div className="container">
        <div className="card mb-3 shadow-sm mt-4">
            <div className="row g-0">
                <div className="col-md-4 d-flex">
                    <img className="card-img-top" src={product.image} alt={product.title} style={{ objectFit: "contain" }} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title text-black">{product.title}</h4>
                        <p className="card-text text-black">{product.description}</p>
                        <p className="card-text text-black">{product.detail}</p>
                        <ItemCount onAddToCart={onAddToCart} />                                
                    </div>
                </div>
            </div>
            {/* <div className="m-3">
              <Link to={`/detalle/${product.id - 1}`}>
                <Button className="btn btn-secondary btn-sm m-4">← Anterior</Button>
              </Link>
              <Link to={`/detalle/${product.id + 1}`}>
                <Button className="btn btn-secondary btn-sm">Siguiente →</Button>
              </Link>
            </div> */}
        </div>
    </div>
  );
}

export default ItemDetailContainer;