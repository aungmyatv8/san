import React from "react";
import { View, Text, TextInput, StyleSheet, SafeAreaView } from "react-native";

function HomeScreen() {
  const [value, onChangeText] = React.useState("");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={{ color: "#f94144", textAlign: "center", fontSize: 23 }}>
          Album Form
        </Text>
        <View style={styles.div}>
          <Text style={styles.inputText}>Album Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => onChangeText(text)}
            value={value}
            placeholder="Album နာမည် ရိုက်ထည့်ပါ"
            placeholderTextColor="#A9A9A9"
          />
        </View>
        <View style={styles.div}>
          <Text style={styles.inputText}>ဖန်တီးသူနာမည်</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => onChangeText(text)}
            value={value}
            placeholder="သဘင်သည်နာမည်ထည့်ပါ"
            placeholderTextColor="#A9A9A9"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "6%",
    flexDirection: "column",
  },
  inputText: {
    color: "#fff",
    marginLeft: 8,
    fontSize: 14,
    marginBottom: 3,
  },
  div: {
    width: "80%",
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
export default HomeScreen;
