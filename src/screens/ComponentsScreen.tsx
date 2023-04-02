import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NAME = "Serge";

const ComponentsScreen = (): JSX.Element => {
  const subTitle = <Text style={styles.subTitle}>My name is {NAME} </Text>;

  return (
    <View>
      <Text style={styles.title}>Getting started with React Native</Text>
      {subTitle}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
  },

  subTitle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
