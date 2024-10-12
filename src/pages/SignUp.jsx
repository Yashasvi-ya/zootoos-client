import React from "react";

const SignUp = () => {
  return (
    <>
      <div className="hero bg-base-100 min-h-screen">
        <div className="w-screen hero-content flex-rowflex-wrap">
          <div className="w-1/2 text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up Now!</h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat expedita debitis, quasi sit corporis porro cumque inventore, quod quos, similique voluptate distinctio maiores?
            </p>
          </div>
          <div className="w-1/2 card bg-base-100 max-w-sm shrink-0 shadow-2xl outline-primary outline outline-1">
            <form className="w-full card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User</span>
                </label>
                <input
                  type="text"
                  placeholder="username"
                  className="input input-bordered"
                  required
                />
              </div>
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
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="confirm password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

