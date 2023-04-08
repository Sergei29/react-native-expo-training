import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface IProps {
  [x: string]: any;
}

const HomeScreen = ({}: IProps): JSX.Element => {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
