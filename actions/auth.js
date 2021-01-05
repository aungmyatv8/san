import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_ERROR,
  AUTH_START,
  SET_TOKENS,
} from "./types";
import { env_variable } from "../config";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { setTokens } from "../utility";

export const refresh_token = () => {};

export const auth_login = (data) => {
  return (dispatch) => {
    dispatch(auth_start());
    axios
      .post(`${env_variable.SERVER_URL}/api/auth/admin-login`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(async (response) => {
        // await setTokens(
        //   response.data.data.accessToken,
        //   response.data.data.refeshToken
        // );
        try {
          console.log("ac", response.data.accessToken);
          console.log("rf", response.data.refreshToken);
          await SecureStore.setItemAsync(
            "access_token",
            response.data.accessToken
          );
          await SecureStore.setItemAsync(
            "refresh_token",
            response.data.refreshToken
          );
          dispatch({
            type: AUTH_LOGIN,
            data: response,
          });
        } catch (error) {
          console.log("e", error);
        }
      })
      .catch((error) => {
        console.log("error", error.response.data.error.message);
        dispatch(auth_error(error.response.data.error.message));
      });
  };
};

export const set_tokens = (tokens) => ({
  type: SET_TOKENS,
  tokens,
});

export const auth_error = (error) => ({
  type: AUTH_ERROR,
  error,
});

export const auth_start = () => {
  return {
    type: AUTH_START,
  };
};

export const auth_logout = (id) => ({
  type: AUTH_LOGOUT,
  id,
});
