import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "./itemList.css"

function ItemList({ products }) {
    return (
        <div className="container mr-2 ml-2">
            <div className="row">
                {products.map((product) => (
                    <div className="col-md-3" key={product.id}>
                        <br />
                        <Link to={`/detalle/${product.id}`} className="no-underline">
                            <div
                                className="card mb-3 shadow-sm"
                                category={product.category}
                            >
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
                                    <Button
                                        type="button"
                                        className="btn btn-info btn-light"
                                    >
                                        Detalles
                                    </Button>
                                    <div>
                                        <span className="price text-black">
                                            ${product.price}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ItemList;

