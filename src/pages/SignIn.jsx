import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <div className="hero bg-base-100 min-h-screen">
        <div className="w-screen hero-content flex-row">
          <div className="w-1/2 text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign in Now!</h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fugiat omnis ea eligendi cum sit nulla laboriosam itaque voluptatibus quaerat? Distinctio, vero in?
            </p>
          </div>
          <div className="w-1/2 card bg-base-100 max-w-sm shrink-0 shadow-2xl outline outline-1 outline-secondary">
            <form className="w-full card-body">
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-secondary">Sign In</button>
              </div>
              <div className="form-control mt-6"><p>New User ? <Link to={'/signup'} className="underline">Sign Up Now!</Link></p></div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
