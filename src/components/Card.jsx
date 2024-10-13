import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <Link to={'/productitem'}>
      <div className="card bg-base-100 w-64 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="w-full btn btn-accent shadow-xl ">Add to Cart</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
