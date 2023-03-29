import Button from "../Button/Button";

function ItemDetail({product}) {
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;





// function ItemDetail({product}) {
//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-md-4">
//                     <img className="card-img-top" src={product.image} alt={product.title} />
//                 </div>
//                 <div className="col-md-8">
//                     <div className="card mb-3 shadow-sm h-100">
//                         <div className="card-body d-flex flex-column justify-content-between">
//                             <div>
//                                 <h4 className="card-title text-black">
//                                     {product.title}
//                                 </h4>
//                                 <p className="card-text text-black">
//                                     {product.description}
//                                 </p>
//                             </div>
//                             <div className="d-flex justify-content-between align-items-center">
//                                 <span className="price text-black">
//                                     ${product.price}
//                                 </span>
//                                 <p className="card-text text-black">{product.detail}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ItemDetail;