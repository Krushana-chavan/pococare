import React, { useContext, useState } from 'react'
import { AiFillFacebook } from "react-icons/ai";
import { CgCopyright } from "react-icons/cg";
import { Link, useNavigate } from 'react-router-dom';
import "./signIn.css"
import { useDispatch } from 'react-redux';
import { SigninReq } from '../../Redux/Auth/action';
import { AuthContext } from '../../Context/AuthContextProvider';
const initialState = {
  email: "",
  password: ""
}

const SignIn = () => {
  const [data, setData] = useState(initialState);
  const { setAuth } = useContext(AuthContext);
  const dispatch=useDispatch();
  const navigate=useNavigate()
  const handelInputChange = (e) => {
    const {name, value} = e.target
    setData({...data, [name] : value})
  }
  const handelSignIn = (e) =>{
    e.preventDefault();
   dispatch(SigninReq(data)).then((res)=>{
    if(res.type==='SIGNIN_SUCCESS_REQUEST'){
      alert("Login Successful!");
      setAuth(true)
      navigate("/")
    }else{
      alert("Something went wrong!please try  again")
    }
   })
    setData(initialState)
  }
  return (
    <>
      <div className='SignIn-container'>
        <div>
          <img className='logo' src="https://www.pococare.com/image.png" alt="pococare_logo" />
        </div>

        <form className='signIn-form' onSubmit={handelSignIn}>
          <input type="text" placeholder='Mobile Number or Email' name='email' value={data.email} onChange={handelInputChange} required />
          <input type="text" placeholder='Password' name='password' value={data.password} onChange={handelInputChange} required />
          <div className='SignIn-Btn'>
            <button>Sign in</button>
          </div>
        </form>

        <div className='orPart'>
          <hr className='hrTag me-3' />
          <p>or</p>
          <hr className='hrTag ms-3' />
        </div>

        <div>
          
          <p className='forgot-password'>Forgot password?</p>
        </div>

      </div>
      <div className='log-account'>
        <p>Don't have an account? <Link to="/signUp">Sign up</Link></p>
      </div>

      
    </>
  )
}

export default SignIn