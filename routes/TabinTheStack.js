import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ThabinHome from "../pages/ThabinThe/thabinHome";
// import Thabin from "../pages/ThabinThe/thabinThe";
import ThabinThe from "../pages/ThabinThe/thabinThe";
import Album from "../pages/Album";

const Stack = createStackNavigator();

const TabinTheStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ThabinTheHome"
        component={ThabinHome}
        options={{
          title: "သဘင်သည်များ",
          headerStyle: {
            backgroundColor: "#f94144",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen name="ThabinThe" component={ThabinThe} />
    </Stack.Navigator>
  );
};

export default TabinTheStack;
