import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const [cart, setCart] = useState();

  useEffect(() => {
    const getCart = async () => {
      const res = await fetch("/api/user/getcart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: currentUser._id }),
      });
      const data = await res.json();
      if (res.ok) {
        setCart(data);
        console.log(data);
      }
    };
    getCart();
  }, []);

  return (
    <>
      <div className="min-h-screen max-w-screen flex flex-col justify-center items-center gap-5">
        <div className="w-1/2 min-h-1/2">
          {cart &&
            cart.cartItems.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full min-h-1/4 flex flex-row justify-between items-center border-b-2 border-y-2 rounded-md p-3"
                >
                  <h1 className="text-xl font-bold">{item.name}</h1>
                  <p>Size : {item.size}</p>
                  <p>Quantity : {item.qty}</p>
                  <p>Rs. {item.price}</p>
                </div>
              );
            })}
        </div>
        <button className="btn btn-accent">Checkout</button>
      </div>
    </>
  );
};

export default Cart;
