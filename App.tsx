import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ResultShowScreen from "./src/screens/ResultShowScreen";
import SearchScreen from "./src/screens/SearchScreen";
import { RootStackParamList } from "./src/types";

const Stack = createStackNavigator<RootStackParamList>();

const App = (): JSX.Element => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerTitle: "Business Search",
      }}
    >
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="ResultShow" component={ResultShowScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
