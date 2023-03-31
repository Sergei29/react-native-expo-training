import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.one}>
        <Text>1</Text>
      </View>
      <View style={styles.two}>
        <Text>2</Text>
      </View>
      <View style={styles.three}>
        <Text>3</Text>
      </View>
    </View>
  );
}

const square = {
  width: 100,
  height: 100,
};
const styles = StyleSheet.create({
  appContainer: {
    // alignItems: "center",
    justifyContent: "center",
    height: "30%",
    flexDirection: "row",
  },
  one: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    ...square,
  },
  two: {
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    ...square,
  },
  three: {
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    ...square,
  },
});
