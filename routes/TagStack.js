import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import HomeScreen from "../pages/Home";
import HistoryScreen from "../pages/History";
// import ThabinThe from "../pages/ThabinThe/thabinThe";
import ThabinTheStack from "./TabinTheStack";

import { MaterialIcons as Icon, FontAwesome5 } from "@expo/vector-icons";

const TagStack = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#fff",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Album",
          tabBarIcon: ({ color }) => (
            <Icon name="album" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarLabel: "စာရင်း",
          tabBarIcon: ({ color }) => (
            <Icon name="history-edu" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ThabinTheStack"
        component={ThabinTheStack}
        options={{
          tabBarLabel: "သဘင်သည်",
          tabBarIcon: ({ color, focused }) => {
            return (
              <FontAwesome5
                name={focused ? "user-alt" : "user"}
                color={color}
                size={20}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TagStack;
