import React from "react";

const Orders = () => {
  return (
    <>
      <div className="min-h-screen min-w-screen flex flex-row justify-center items-center">
        <div className="w-1/2">
          <div className="w-full min-h-1/4 flex flex-row justify-between items-center border-b-2 border-y-2 rounded-md p-3">
            <h1 className="text-xl font-bold">order</h1>
            <p>Size: </p>
            <p>Quantity: </p>
            <p>Rs. </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
