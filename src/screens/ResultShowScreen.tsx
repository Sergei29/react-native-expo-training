import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface IProps {
  [x: string]: any;
}

const ResultShowScreen = ({}: IProps): JSX.Element => {
  return (
    <View>
      <Text>Result Show Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultShowScreen;
