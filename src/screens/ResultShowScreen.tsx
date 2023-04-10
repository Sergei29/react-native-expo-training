import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationStackScreenProps } from "react-navigation-stack";

const ResultShowScreen = ({
  navigation,
}: NavigationStackScreenProps): JSX.Element => {
  const id = navigation.getParam("id");
  return (
    <View>
      <Text>Result Show Screen</Text>
      <Text>ID: {id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultShowScreen;
