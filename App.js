import "react-native-gesture-handler";
import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    // Wrap App in Redux Store
    <Provider store={store}>
      {/* React Navigation */}
      <NavigationContainer>
        {/* Takes care of notches that are unique to devices */}
        <SafeAreaProvider>
          <KeyboardAvoidingView
          // Keyboard behavior is diff for each os android is height
          behavior={Platform.OS === "ios" ? "padding": "height"}
          style={{ flex: 1 }}
          keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          >
          {/* Works similar to React Router */}
          <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />      
            <Stack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="EatScreen"
              component={MapScreen}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
