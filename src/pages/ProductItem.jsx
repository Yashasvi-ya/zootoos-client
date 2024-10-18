import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductItem = () => {
  const [products, setProducts] = useState([]);
  const { productId } = useParams();
  const currentUser = useSelector((state) => state.currentUser)
  const [formData, setFormData] = useState({ productId: productId, userId : currentUser._id});

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        `/api/product/getproducts?productId=${productId}`,
        {
          method: "GET",
        }
      );
      const data = await res.json();
      if (res.ok) {
        setProducts(data.products[0]);
        setFormData((prev) => ({...prev, name : data.products[0].name, price : data.products[0].price}))
      }
    };
    fetchProducts();
  }, []);
  
  const handleClick = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.id]: e.target.value,
    }));
  };

  const handleAddToCart = async () => {
    console.log(formData);
    if(!formData.qty || !formData.size || !productId || !formData.name || !formData.price){
      return alert("please fill all fields")
    }
    try {
      const res = await fetch('/api/user/addtocart',{
        method : "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if(res.ok){
        console.log(data)
        toast.success("Product addded to Cart");
      }
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <>
      <div className="min-w-screen min-h-screen flex flex-col flex-wrap justify-center items-center md:flex-row">
        <div className="w-1/2 flex justify-center items-center px-6">
          <div className="flex flex-row flex-wrap">
            <img
              src={products.imageUrl}
              className="w-1/2 rounded-lg shadow-2 "
            />
            <img
              src={products.imageUrl}
              className="w-1/2 rounded-lg shadow-2 "
            />
            <img
              src={products.imageUrl}
              className="w-1/2 rounded-lg shadow-2 "
            />
            <img
              src={products.imageUrl}
              className="w-1/2 rounded-lg shadow-2 "
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-5">
          <h1 className="text-5xl font-bold">{products.name}</h1>
          <div className="divider"></div>
          <h2 className="text-2xl font-semibold">Rs. {products.price}</h2>

          <div className="flex flex-row gap-3">
            {products.sizes &&
              products.sizes.map((size, index) => {
                return (
                  <span className="text-center" key={index}>
                    <p>{size}</p>
                    <input
                      type="radio"
                      name="radio-1"
                      className="radio"
                      id="size"
                      value={size}
                      onClick={handleClick}
                    />
                  </span>
                );
              })}
          </div>

          <div className="flex items-center gap-3">
            <p>Quantity</p>
            <select
              className="select select-accent w-1/6 max-w-xs"
              id="qty"
              onClick={handleClick}
            >
              <option value={1}>
                1
              </option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
          <button className="w-1/4 btn btn-secondary" onClick={handleAddToCart}>
            Add to Cart
          </button>

          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Product Description
            </div>
            <div className="collapse-content">
              <p>{products.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
