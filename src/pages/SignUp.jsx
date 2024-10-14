import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  
  const [formData, setFormData] = useState({})
  const navigate = useNavigate();

  const handleChange = (e) => [
    setFormData({ ...formData, [e.target.id]: e.target.value.trim()})
  ]

  const handleSignUp = async (e)=>{
    e.preventDefault();
    if(!formData.username || !formData.email || !formData.shippingAddress || !formData.password || !formData.confirmPassword ){
      return alert("Please fill all the fields");
    }
    if(formData.password !== formData.confirmPassword ){
      return alert("Both Passwords should be same")
    }
    try {
      const {confirmPassword : pass, ...rest} = formData;
      const res = await fetch('/api/auth/signup',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify(rest),
      })
      const data = await res.json()
      if(data.success === false){
        return console.log(data.message)
      }
      if(res.ok){
        navigate('/signin')
      }
    } catch (error) {
      console.error(error);
    }
  }

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
            <form className="w-full card-body" onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                id="username"
                  type="text"
                  placeholder="username"
                  className="input input-bordered"
                  required
                  onChange={handleChange}
                />
              </div>
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
                  <span className="label-text">Address</span>
                </label>
                <input
                id="shippingAddress"
                  type="text"
                  placeholder="address"
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
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                id="confirmPassword"
                  type="password"
                  placeholder="confirm password"
                  className="input input-bordered"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary" >Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

