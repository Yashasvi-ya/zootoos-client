import React from "react";
import Card from "../components/Card";

const Products = () => {
  return (
    <>
      <div className="h-auto w-auto flex flex-row bg-base-100">
        <div className="w-2/12 p-5 flex flex-col gap-5">
          <input type="range" min={0} max={100}  className="range range-secondary" />
          <select className="select select-secondary w-full max-w-xs">
            <option disabled selected>
              Select Category
            </option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div className="w-10/12 flex flex-row flex-wrap gap-5 p-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Products;
