import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Provider as BlogContextProvider } from "./src/context/BlogContext";
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import { RootStackParamList } from "./src/types";

const Stack = createStackNavigator<RootStackParamList>();

const App = (): JSX.Element => (
  <BlogContextProvider>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: "Blogs",
        }}
      >
        <Stack.Screen name="Home" component={IndexScreen} />
        <Stack.Screen name="Show" component={ShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </BlogContextProvider>
);

export default App;
