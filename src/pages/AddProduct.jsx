import React, { useState } from "react";

const AddProduct = () => {
  const [formData, setFormData] = useState({});
  const [sizes, setSizes] = useState([]);
  const [color, setColor] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  };

  const handleSize = (e) => {
    const size = e.target.value;
    if (e.target.checked) {
      setSizes((prevSizes) => {
        const newSizes = [...prevSizes, size];
        setFormData((prevFormData) => ({ ...prevFormData, sizes: newSizes }));
        console.log(formData);
        return newSizes;
      });
    } else {
      setSizes((prevSizes) => {
        const newSizes = prevSizes.filter((s) => s !== size);
        setFormData((prevFormData) => ({ ...prevFormData, sizes: newSizes }));
        console.log(formData);
        return newSizes;
      });
    }
  };

  const handleColor = (e) => {
    const color = e.target.value;
    if (e.target.checked) {
      setColor((prevcolor) => {
        const newcolor = [...prevcolor, color];
        setFormData((prevFormData) => ({ ...prevFormData, color: newcolor }));
        console.log(formData);
        return newcolor;
      });
    } else {
      setColor((prevcolor) => {
        const newcolor = prevcolor.filter((c) => c !== color);
        setFormData((prevFormData) => ({ ...prevFormData, color: newcolor }));
        console.log(formData);
        return newcolor;
      });
    }
  };

  const handlePost = async () => {
    if (
      !formData.name ||
      !formData.imageUrl ||
      !formData.description ||
      !formData.price ||
      !formData.sizes ||
      !formData.color
    ) {
      return alert("Please fill all the fields");
    }
    try {
      const res = await fetch("/api/product/addproduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success === false){
        return console.log(data.message)
      }
      if(res.ok){
        alert('Product added')
      }
    } catch (error) {
        console.log(error)
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-wrap justify-center items-center">
      <div className="w-full flex flex-col gap-3 items-center">
        <div>
          <p>Name</p>
          <input
            id="name"
            type="text"
            placeholder="Type here"
            className="input input-bordered input-secondary w-full max-w-xs"
            onChange={handleChange}
          />
        </div>
        <div>
          <p>ImageUrl</p>
          <input
            id="imageUrl"
            type="text"
            placeholder="Type here"
            className="input input-bordered input-secondary w-full max-w-xs"
            onChange={handleChange}
          />
        </div>
        <div>
          <p>Description</p>
          <input
            id="description"
            type="text"
            placeholder="Type here"
            className="input input-bordered input-secondary w-full max-w-xs"
            onChange={handleChange}
          />
        </div>
        <div>
          <p>Price</p>
          <input
            id="price"
            type="text"
            placeholder="Type here"
            className="input input-bordered input-secondary w-full max-w-xs"
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center gap-5">
          <label>Sizes</label>
          <div className="flex gap-2 justify-center items-center">
            {["S", "M", "L", "XL"].map((size) => (
              <div key={size}>
                <p>{size}</p>
                <input
                  type="checkbox"
                  value={size}
                  className="checkbox checkbox-secondary"
                  onChange={handleSize}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-5">
          <label>Color</label>
          <div className="flex gap-2 justify-center items-center">
            {["white", "black"].map((color) => (
              <div key={color}>
                <p>{color}</p>
                <input
                  type="checkbox"
                  value={color}
                  className="checkbox checkbox-secondary"
                  onChange={handleColor}
                />
              </div>
            ))}
          </div>
        </div>
        <button className="btn btn-secondary" onClick={handlePost}>
          Post
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
