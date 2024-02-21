import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { NewsTabNavigation } from "./NewsTabNavigation";
import { NewsDetailScreen } from "../screens/NewDetailScreen";

const Stack = createNativeStackNavigator();

export const RootNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="NewsTab" component={NewsTabNavigation}></Stack.Screen>
      <Stack.Screen
        name="NewsDetail"
        component={NewsDetailScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
