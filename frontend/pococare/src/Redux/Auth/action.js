import axios from "axios";
import { json } from "react-router-dom";
// import { storeData_LC } from "../../components/LocalStorage";
import {
  SIGNIN_FAILURE_REQUEST,
  SIGNIN_LOODING_REQUEST,
  SIGNIN_SUCCESS_REQUEST,
  SIGNUP_FAILURE_REQUEST,
  SIGNUP_LOODING_REQUEST,
  SIGNUP_SUCCESS_REQUEST,
} from "./actionTypes";

export const SignupReq = (e) => (dispatch) => {
  dispatch({ type: SIGNUP_LOODING_REQUEST });
  return axios
    .post(`https://pococare-6jvj.onrender.com/auth/signup`, e)
    .then((response) => {
      
      return dispatch({
        type: SIGNUP_SUCCESS_REQUEST,
        payload: response.data.msg,
      });
    })
    .catch(function (error) {
      const { response } = error;
   
      return dispatch({
        type: SIGNUP_FAILURE_REQUEST,
        payload: response.data.error,
      });
    });
};

export const SigninReq = (e) => (dispatch) => {
  dispatch({ type: SIGNIN_LOODING_REQUEST });
  return axios
    .post(`https://pococare-6jvj.onrender.com/auth/login`, e)
    .then(function (response) {
    
      // storeData_LC("userdata", response.data);
      localStorage.setItem("token",response.data.token)
      localStorage.setItem("refreshtoken",response.data.refreshtoken)
     localStorage.setItem("user",JSON.stringify(response.data.user))
      return dispatch({
        type: SIGNIN_SUCCESS_REQUEST,
        payload: { token: response.data.token, data: response.data.user },
      });
    })
    .catch(function (error) {

      return dispatch({
        type: SIGNIN_FAILURE_REQUEST,
        payload: error.response.data.error,
      });
    });
};