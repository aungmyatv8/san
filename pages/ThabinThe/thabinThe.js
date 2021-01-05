import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
  Platform,
  Button,
  Alert,
} from "react-native";

import Cover from "./cover.jpg";
import Profile from "./profile.png";
import * as ImagePicker from "expo-image-picker";
import AWS from "aws-sdk/";

import {} from "";

const s3 = new AWS.S3({
  region: "ap-southeast-1",
  credentials: {
    accessKeyId: "AKIAUWCSM2EMZNMCYWOS",
    secretAccessKey: "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",
  },
  signatureVersion: "v4",
});

const ThabinThe = () => {
  const [value, onChangeText] = React.useState("");
  const [image, setImage] = useState(null);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <TouchableOpacity style={{ width: "100%" }}>
          <ImageBackground source={Cover} style={styles.image}>
            <Text style={styles.imageText}>Cover Photo</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profilePicContainer}>
          <Image source={Profile} style={styles.profilePic} />
        </TouchableOpacity>
        <View style={styles.div}>
          <Text style={styles.inputText}>သဘင်သည်နာမည်</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => onChangeText(text)}
            value={value}
            placeholder="သဘင်သည် နာမည် ရိုက်ထည့်ပါ"
            placeholderTextColor="#A9A9A9"
          />
        </View>
        <View style={styles.div}>
          <Button
            title="Submit"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 130,
    resizeMode: "cover",
    backgroundColor: "#f94144",
    opacity: 0.3,
  },
  profilePicContainer: {
    alignSelf: "center",
    position: "relative",
    marginTop: -30,
  },
  profilePic: {
    width: 100,
    height: 100,
  },
  imageText: {
    color: "#fff",
    textAlign: "center",
    marginTop: 50,
    fontSize: 20,
    fontFamily: "Padauk_400Regular",
    // marginTop: -50,
  },
  container: {
    flex: 1,
    marginTop: "4%",

    flexDirection: "column",
  },
  inputText: {
    color: "#fff",
    marginLeft: 8,
    fontSize: 17,
    marginBottom: 3,
    fontFamily: "Padauk_400Regular",
  },
  div: {
    width: "80%",
    marginTop: 20,
    marginHorizontal: "10%",
    marginBottom: 10,
  },
  input: {
    color: "white",
    fontFamily: "Padauk_400Regular",
    borderColor: "gray",
    borderWidth: 1,
    fontSize: 16,
    height: 42,
    padding: 10,
    borderRadius: 5,
    letterSpacing: 1,
  },
});
export default ThabinThe;
