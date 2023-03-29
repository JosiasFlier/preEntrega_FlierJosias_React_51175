import Button from "../Button/Button";
import { Link } from "react-router-dom";


function ItemList({products}) {
    return (
        <div className="container">
            <div className="row">
                {products.map((product) => (
                    <div className="col-md-3" key={product.id}>
                        <br />
                        <div className="card mb-3 shadow-sm" category={product.category}>
                            <img
                                className="card-img-top"
                                src={product.image}
                                alt={product.title}
                            />
                            <div className="card-body">
                                <h4 className="card-title text-black">
                                    {product.title}
                                </h4>
                                <p className="card-text text-black">
                                    {product.description}
                                </p>
                                <Link to={`/detalle/${product.id}`}>
                                    <Button type="button" className="btn btn-info btn-light">Detalles</Button>
                                </Link>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="price text-black">
                                        ${product.price}
                                    </span>
                                    <Button>Agregar</Button>
                                    {/* <button type="button" className="btn btn-sm btn-outline-secondary">
                                        Agregar
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ItemList;