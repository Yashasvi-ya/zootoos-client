import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
    const res = await fetch ('/api/product/getproducts',{
      method : 'GET'
    })
    const data = await res.json();
    if(res.ok){
      setProducts(data.products)
      console.log(products)
    } 
  }
  fetchProducts();
  }, [])

  return (
    <>
      <div className="h-auto w-auto flex flex-row bg-base-100">
        <div className="w-2/12 p-5 flex flex-col gap-5">
          <input type="range" min={0} max={100}  className="range range-secondary" />
          <select className="select select-secondary w-full max-w-xs">
            <option disabled>
              Select Category
            </option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div className="w-10/12 flex flex-row flex-wrap gap-5 p-5">
          {
            products && products.map((product, index) => {
              console.log(product)
              return (
                <Card key={index} product={product} /> 
                )
            })
          }
        </div>
      </div>
    </>
  );
};

export default Products;
