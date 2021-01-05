import React, { useEffect, useState } from "react";
import HomeScreen from "./pages/Home";
import HistoryScreen from "./pages/History";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";

import LoginStack from "./routes/LoginStack";

import AppLoading from "expo-app-loading";
import TagStack from "./routes/TagStack";
import * as SecureStore from "expo-secure-store";
import { getAccessToken, getRefreshToken } from "./utility";
import { set_tokens } from "./actions/auth";

import { connect } from "react-redux";
const Main = (props) => {
  const [appIsReady, changeAppReady] = useState(false);

  async function mount() {
    try {
      const access_token = await getAccessToken();
      const refresh_token = await getRefreshToken();

      if (access_token && refresh_token) {
        props.setTokens({ access_token, refresh_token });
      }
      changeAppReady(true);
    } catch (err) {
      console.log("err", err);
    }
  }
  mount();

  if (!appIsReady) {
    return null;
  }
  return (
    <NavigationContainer theme={DarkTheme}>
      {!props.token ? <LoginStack /> : <TagStack />}
    </NavigationContainer>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTokens: (tokens) => dispatch(set_tokens(tokens)),
  };
};

const mapStateToProps = (state) => ({
  token: state.auth.access_token,
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
