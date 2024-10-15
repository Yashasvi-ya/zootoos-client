import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOutSuccess } from "../redux/user/userSlice";

const Profile = () => {

  const {currentUser} = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();


    const handleSignOut = async () => {
        try {
            const res = await fetch('/api/user/signout',{
                method: 'POST',
            })
            const data = res.json();
            if(res.ok){
                dispatch((signOutSuccess()));
                navigate('/signin')
            }
            else console.log(data.message)
        } catch (error) {
            console.log(error.message)
        }
    }
  
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{currentUser.username}</h1>
            <p className="py-6">
              {currentUser.email}
            </p>
            <p className="py-6">
              {currentUser.shippingAddress}
            </p>
            <button className="btn btn-primary">Update Profile</button>
            <button className="btn btn-primary" onClick={handleSignOut}>Sign Out</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
