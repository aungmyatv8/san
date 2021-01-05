import React, { useEffect, useState } from "react";

import AppLoading from "expo-app-loading";
import {
  useFonts,
  Padauk_400Regular,
  Padauk_700Bold,
} from "@expo-google-fonts/padauk";

import { Provider } from "react-redux";

import { createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from "./reducers/auth";
import Main from "./Main";
import thunk from "redux-thunk";
import * as SplashScreen from "expo-splash-screen";

import { getAccessToken, getRefreshToken } from "./utility";

const rootReducers = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducers, applyMiddleware(thunk));

const App = () => {
  let [fontsLoaded] = useFonts({
    Padauk_400Regular,
    Padauk_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
