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

const init = {
  user: "",
  error: [],
  loading: false,
  token: localStorage.getItem("token"),
  isAuth: false,
};

export const userReducer = (state = init, { type, payload }) => {
  switch (type) {
    case SING_UP:
    case LOGIN:
    case GET_PROFILE:
      return {
        ...state,
        loading: true,
      };

    case SING_UP_FAIL:
    case LOGIN_FAIL:
    case GET_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case SING_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: [],
        user: payload.user,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload.user,
        error: [],
        isAuth: true,
        token: payload.token,
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: [],
        user: payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: [],
        error: [],
        isAuth: false,
      };

    default:
      return state;
  }
};
