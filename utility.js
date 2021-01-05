import * as SecureStore from "expo-secure-store";

export const getAccessToken = async () => {
  try {
    return SecureStore.getItemAsync("access_token");
  } catch (error) {
    console.log(error);
  }
};

export const getRefreshToken = async () => {
  try {
    return SecureStore.getItemAsync("refresh_token");
  } catch (error) {
    console.log(error);
  }
};
