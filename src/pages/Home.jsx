import React from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="w-full flex flex-col justify-center items-center p-5 ">
        <h1 className="text-3xl font-bold">Our Products</h1>
        <div className="flex justify-center items-center flex-row flex-wrap gap-5 m-3 p-3">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        <Link to={'/products'}>
          <button className="btn btn-outline btn-success ">Show More</button>
        </Link>
      </div>
      <h1 className="font-bold text-4xl">Hello World</h1>
      <button class="btn btn-primary">Primary</button>
    </>
  );
};

export default Home;
