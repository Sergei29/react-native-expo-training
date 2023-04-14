import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import IndexScreen from "./src/screens/IndexScreen";
import { RootStackParamList } from "./src/types";

const Stack = createStackNavigator<RootStackParamList>();

const App = (): JSX.Element => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerTitle: "Blog",
      }}
    >
      <Stack.Screen name="Home" component={IndexScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
