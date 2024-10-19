import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Products from "./pages/Products";
import ProductItem from "./pages/ProductItem";
import Profile from "./pages/Profile";
import AddProduct from "./pages/AddProduct";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/productitem/:productId" element={<ProductItem/>} />
        <Route path="/addproduct" element={<AddProduct/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
      <Footer/>
      <Toaster/>
    </>
  );
};

export default App;
