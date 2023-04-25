import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import Loader from "../Loader/Loader";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { getSingleItem } from "../../services/firestore";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

// --------------SWEETALERT2---------------------------------
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

// --------------SWEETALERT2---------------------------------


function ItemDetailContainer() {
  const [product, setProduct] = useState([]);

  let { id } = useParams();

  const { cart, addItem} = useContext(cartContext);

  // Const, para controlar la visibilidad de ItemCount
  const [showItemCount, setShowItemCount] = useState(true); 

  useEffect(() => {
    getSingleItem(id).then((respuesta) => {
      setProduct(respuesta);
    });
  }, [id]);

  function onAddToCart(count) {
    addItem(product, count);
    // Oculto el ItemCount
    setShowItemCount(false); 
    MySwal.fire({
      title: "Producto agregado al Carrito ",
      width: 700,
      padding: "3em",
      color: "rgba(104,5,29,0.9)",
      background: "#fff",
      backdrop: "rgba(5,7,6,0.8)",
      icon: "success",
  });
  }

  if (product.length === 0) {
    return <Loader/>;
  }


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

                        {showItemCount ? (<ItemCount onAddToCart={onAddToCart} />) : (
                        <Link to="/cart">
                          <Button type="button" className="btn btn-primary">Ir al Carrito</Button>
                        </Link>
                        )}                                
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ItemDetailContainer;

