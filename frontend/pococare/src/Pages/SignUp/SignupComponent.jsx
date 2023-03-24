import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import { CgCopyright } from "react-icons/cg";
import "./signUp.css";
import { useDispatch } from "react-redux";
import { SignupReq } from "../../Redux/Auth/action";
const initialState = {
  email: "",
  username: "",
  password: "",
};

const SignupComponent = () => {
  const [data, setData] = useState(initialState);
  // const [signUpData, setSignUpData] = useState({});
  const Dispatch = useDispatch();
  const navigate=useNavigate()
  const handelInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handelSignUp = (e) => {
    e.preventDefault();
    // setSignUpData({...signUpData, data});
   
    Dispatch(SignupReq(data)).then((res)=>{
      if(res.payload==='Signup Sucessfully'){
        alert(res.payload);
        navigate("/login")
      }else{
        alert(res.payload)
      }
    })
    setData(initialState);
  };

  return (
    <>
      <div className="signUp-container">
        <div>
          <img
            className="logo"
            src="https://www.pococare.com/image.png"
          />
          
         

        
        </div>

        <form className="signUp-form" onSubmit={handelSignUp}>
          <input
            type="text"
            placeholder=" Email"
            name="email"
            value={data.email}
            onChange={handelInputChange}
            required
          />
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={data.username}
            onChange={handelInputChange}
            required
          />
          <input
            type="text"
            placeholder="Password"
            name="password"
            value={DataTransfer.password}
            onChange={handelInputChange}
            required
          />

          <div>
            <p className="info mt-1">
              People who use our service may have uploaded your contact
              information to Instagram.{" "}
              <span className="learn-more">Learn More</span>
            </p>

            <p className="info mt-1">
              By signing up, you agree to our{" "}
              <span className="learn-more">
                {" "}
                Terms , Privacy Policy and Cookies Policy .
              </span>
            </p>
          </div>

          <div className="SignUpBtn">
            <button>Sign up</button>
          </div>
        </form>
      </div>

      <div className="log-account">
        <p>
          Have an account? <Link to="/login">Log in</Link>
        </p>
      </div>

      

    </>
  );
};

export default SignupComponent;
