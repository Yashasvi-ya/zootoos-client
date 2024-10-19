import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const Home = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
    const res = await fetch ('/api/product/getproducts?limit=3',{
      method : 'GET'
    })
    const data = await res.json();
    if(res.ok){
      setProducts(data.products)
    } 
  }
  fetchProducts();
  }, [])

  return (
    <>
      <Hero />
      <div className="w-full flex flex-col justify-center items-center p-5 ">
        <h1 className="text-3xl font-bold">Our Products</h1>
        <div className="flex justify-center items-center flex-row flex-wrap gap-5 m-3 p-3">
        {
            products && products.map((product, index) => {
              return (
                <Card key={index} product={product} /> 
                )
            })
          }
        </div>

        <Link to={'/products'}>
          <button className="btn btn-outline btn-success ">Show More</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
