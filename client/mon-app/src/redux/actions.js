import {
  GET_PROFILE,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  SING_UP,
  SING_UP_FAIL,
  SING_UP_SUCCESS,
} from "./actionTypes";
import axios from "axios";

export const userSignUp = (newUser) => async (dispatch) => {
  dispatch({ type: SING_UP });
  try {
    const res = await axios.post("user/signUp", newUser);
    dispatch({
      type: SING_UP_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: SING_UP_FAIL,
      payload: error.response.data,
    });
  }
};

export const userLogin = (user) => async (dispatch) => {
  dispatch({ type: LOGIN });
  try {
    const res = await axios.post("/user/login", user);
    localStorage.setItem("token", res.data.token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data,
    });
  }
};

export const getUserProfile = () => async (dispatch) => {
  dispatch({
    type: GET_PROFILE,
  });
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    const res = await axios.get("/user/auth", config);
    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROFILE_FAIL,
      payload: error.response.data,
    });
  }
};
export const userLogout=()=>{
    return {
        type:LOGOUT,
        payload:localStorage.removeItem("token")
    }
}
