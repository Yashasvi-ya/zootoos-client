import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const product = props.product
  const imageUrl = product.imageUrl
  return (
    <Link to={`/productitem/${product._id}`}>
      <div className="card bg-base-100 w-64 shadow-xl h-96">
        <figure>
          <img
            src={imageUrl}
            alt="alt image"
            className="object-contain h-full w-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <p>{product.description}</p>
          <p>Rs. {product.price}</p>
          <div className="card-actions justify-end">
            <button className="w-full btn btn-accent shadow-xl ">Add to Cart</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
