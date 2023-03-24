import React, { useEffect, useState } from 'react';
import './home.css';
import axios from 'axios';
const token = localStorage.getItem("token")

function Home() {
  
  const refreshtoken = localStorage.getItem("refreshtoken")

  const state = JSON.parse(localStorage.getItem("user"))
 const [userdata,setUserdata] = useState({})
  const getdata =()=>{
 axios.get(`https://pococare-6jvj.onrender.com/user/${state._id}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res)=>{
     setUserdata(res.data)
    }).catch((error)=>{
      if(error.message == "Request failed with status code 401"){
        
        axios.get(`https://pococare-6jvj.onrender.com/${state._id}`,{
          headers: {
            Authorization: `Bearer ${refreshtoken}`,
          },})
      }else{
        alert ("error",error.message)
      }
    }
    )
  }
  useEffect(()=>{
    getdata()
  },[])
  console.log("state")
  return (
    <div className="Home">
      <div className="header">
        <h1>Welcome Home Page</h1> 
       
      </div>
      <div className="content">
        <img src="https://dummyimage.com/200x200/000/fff" alt="dummy profile pic" />
        <h2>{userdata.username}</h2>
        <p>{userdata.email}</p>
      </div>
      <button onClick={()=>{
        localStorage.removeItem("token")
        localStorage.removeItem("refreshtoken")
        localStorage.removeItem("user")
        getdata()
      }}>logout</button>
    </div>
  );
}

export default Home;
