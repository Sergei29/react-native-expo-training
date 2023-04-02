import React from "react";
import { NavigationScreenConfigProps } from "react-navigation/typescript/react-navigation";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

const CONTENT = {
  COMPONENTS_DEMO: "Go to Components Demo",
  LIST_DEMO: "Go to List Demo",
  IMAGE_DEMO: "Go to Images Demo",
};

const HomeScreen = ({ navigation }: NavigationScreenConfigProps<any, any>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title={CONTENT.COMPONENTS_DEMO}
        onPress={() => navigation.navigate("Components")}
      />
      <Button
        title={CONTENT.LIST_DEMO}
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title={CONTENT.IMAGE_DEMO}
        onPress={() => navigation.navigate("Image")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    rowGap: 16,
    padding: 8,
  },
  text: {
    fontSize: 30,
  },
  touchableArea: {
    backgroundColor: "yellow",
    paddingVertical: 8,
    paddingLeft: 8,
  },
});

export default HomeScreen;
