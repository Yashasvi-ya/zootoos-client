import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signInStart, signInSuccess } from "../redux/user/userSlice";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => [
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() }),
  ];

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return alert("Please fill all the fields");
    }

    try {
      dispatch(signInStart())
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return console.log(data.message);
      }
      if (res.ok) {
        dispatch(signInSuccess(data))
        navigate("/");
      }
      else dispatch(signInFailure(data.message))
    } catch (error) {
      dispatch(signInFailure(data.message))
    }
  };

  return (
    <>
      <div className="hero bg-base-100 min-h-screen">
        <div className="w-screen hero-content flex-row">
          <div className="w-1/2 text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign in Now!</h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              fugiat omnis ea eligendi cum sit nulla laboriosam itaque
              voluptatibus quaerat? Distinctio, vero in?
            </p>
          </div>
          <div className="w-1/2 card bg-base-100 max-w-sm shrink-0 shadow-2xl outline outline-1 outline-secondary">
            <form className="w-full card-body" onSubmit={handleSignIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  onChange={handleChange}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-secondary">
                  Sign In
                </button>
              </div>
              <div className="form-control mt-6">
                <p>
                  New User ?{" "}
                  <Link to={"/signup"} className="underline">
                    Sign Up Now!
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
