import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,
  Button,
  TouchableHighlight,
  Platform,
  ActivityIndicator,
} from "react-native";
import { connect } from "react-redux";
import { auth_login, refresh_token } from "../actions/auth";

import image from "./background.png";
import { setToken } from "../utility";
import Loader from "../components/Loader";

const Login = (props) => {
  const [phNo, onChangeText] = React.useState("09962001158");
  const [code, onChangeCode] = React.useState("veomas123");

  const onSubmit = () => {
    props.login({ phNo, code });
  };

  // console.log("error", props.error);

  console.log("loading", props.loading);

  if (props.loading) {
    return <Loader />;
  }

  return (
    <ImageBackground source={image} style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.container}>
            <View style={styles.card}>
              <Text style={styles.header}>Login</Text>
              {props.error && (
                <View style={styles.errorDiv}>
                  <Text style={styles.error}>{props.error}</Text>
                </View>
              )}
              <View style={styles.div}>
                <Text style={styles.textInput}>ဖုန်းနံပါတ်</Text>
                <TextInput
                  placeholder="ဖုန်းနံပါတ်ထည့်ပါ"
                  style={styles.input}
                  onChangeText={(text) => onChangeText(text)}
                  value={phNo}
                  keyboardType="number-pad"
                />
              </View>
              <View style={styles.div}>
                <Text style={styles.textInput}>Passcode</Text>
                <TextInput
                  placeholder="ဖုန်းနံပါတ်ထည့်ပါ"
                  style={styles.input}
                  onChangeText={(text) => onChangeCode(text)}
                  value={code}
                  secureTextEntry={true}
                />
              </View>
              <View style={styles.div}>
                <TouchableHighlight
                  onPress={onSubmit}
                  style={styles.button}
                  disabled={props.loading}
                >
                  <Text>Submit</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "6%",
    alignItems: "center",
    justifyContent: "center",
  },
  errorDiv: {
    margin: 10,
    backgroundColor: "#d62828",
    padding: 5,
  },
  error: {
    color: "#fff",
    marginLeft: 4,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#fca311",
    padding: 10,
  },
  div: {
    margin: 10,
  },
  textInput: {
    marginLeft: 5,
    fontSize: 17,
    marginBottom: 5,
  },
  input: {
    color: "#000",

    fontFamily: "Padauk_400Regular",
    borderColor: "gray",
    borderWidth: 1,
    fontSize: 16,
    height: 42,
    padding: 10,
    borderRadius: 5,
    letterSpacing: 0.8,
  },
  header: {
    fontSize: 30,
    textAlign: "center",
    fontFamily: "Padauk_400Regular",
    color: "#f77f00",
  },
  card: {
    backgroundColor: "white",
    elevation: 3,
    marginTop: 20,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    borderRadius: 6,
    width: "80%",
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(auth_login(data)),
  };
};

const mapStateToProps = (props) => {
  console.log(props.auth);
  return {
    access_token: props.auth.access_token,
    refresh_token: props.auth.refresh_token,
    loading: props.auth.loading,
    error: props.auth.error,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
