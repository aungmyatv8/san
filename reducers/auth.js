import {
  AUTH_LOGIN,
  AUTH_ERROR,
  AUTH_START,
  SET_TOKENS,
} from "../actions/types";

const initialState = {
  access_token: null,
  refresh_token: null,
  error: null,
  loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        access_token: action.data.data.accessToken,
        refreh_token: action.data.data.refreshToken,
        error: null,
        loading: false,
      };
    case SET_TOKENS:
      return {
        ...state,
        access_token: action.tokens.access_token,
        refresh_token: action.tokens.refreh_token,
        loading: false,
      };
    case AUTH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case AUTH_START:
      return {
        ...state,
        loading: true,
      };
    case AUTH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default authReducer;
