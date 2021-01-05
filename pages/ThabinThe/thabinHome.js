import React from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const ThabinHome = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ marginRight: 20, marginTop: 5 }}>
          <MaterialIcons
            name="add-circle"
            color="#fff"
            size={27}
            onPress={() => {
              navigation.navigate("ThabinThe");
            }}
          />
        </View>
      ),
    });
  }, [navigation]);
  return (
    <View style={{ flex: 1 }}>
      <Text>Thabin Home</Text>
    </View>
  );
};

export default ThabinHome;
