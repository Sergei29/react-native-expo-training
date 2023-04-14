import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = (): JSX.Element => {
  return (
    <View style={styles.screen}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#fff",
    flex: 1,
  },
});

export default HomeScreen;
