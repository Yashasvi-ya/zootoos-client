import React from "react";
import toast from "react-hot-toast";

const ProductItem = () => {
  return (
    <>
      {/* <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Product Name</h1>
            <p className="py-6">
              This Tshirt is Awesome !!
            </p>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div> */}
      <div className="min-w-screen min-h-screen flex flex-col flex-wrap justify-center items-center md:flex-row">
        <div className="w-1/2 flex justify-center items-center px-6">
          {/* <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          /> */}

          <div className="carousel carousel-center rounded-box max-w-md space-x-4 p-4">
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                className="rounded-box"
              />
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-5">
          <h1 className="text-5xl font-bold">Product Name</h1>
          <div className="divider"></div>
          <h2 className="text-2xl font-semibold">Price : Rs. 999</h2>
          <p className="py-3">This Tshirt is Awesome !!</p>

          <div className="flex flex-row gap-3">
            <span className="text-center">
              <p>S</p>
              <input
                type="radio"
                name="radio-1"
                className="radio"
                defaultChecked
              />
            </span>
            <span className="text-center">
              <p>M</p>
              <input type="radio" name="radio-1" className="radio" />
            </span>
            <span className="text-center">
              <p>L</p>
              <input type="radio" name="radio-1" className="radio" />
            </span>
            <span className="text-center">
              <p>XL</p>
              <input type="radio" name="radio-1" className="radio" />
            </span>
          </div>

          <div className="flex items-center gap-3">
            <p>Quantity</p>
            <select className="select select-accent w-1/6 max-w-xs">
              <option disabled selected>
                1
              </option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <button className="w-1/4 btn btn-secondary" onClick={() => toast.success("Product addded to Cart")}>
            Add to Cart
          </button>

          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Product Description
            </div>
            <div className="collapse-content">
              <p>Some text about the product item </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
