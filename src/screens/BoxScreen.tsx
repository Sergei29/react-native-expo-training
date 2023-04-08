import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface IProps {
  [x: string]: any;
}

const BoxScreen = ({}: IProps): JSX.Element => {
  return (
    <View style={styles.view}>
      <Text style={styles.textStart}>Child #1</Text>
      <Text style={styles.textMiddle}>Child #2</Text>
      <Text style={styles.textEnd}>Child #3</Text>
    </View>
  );
};

const itemStyle = {
  borderWidth: 3,
  borderColor: "red",
  padding: 8,
  backgroundColor: "yellow",
  height: 80,
};

const styles = StyleSheet.create({
  view: {
    borderWidth: 3,
    borderColor: "black",
    padding: 8,
    gap: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    height: 180,
  },
  textStart: {
    ...itemStyle,
  },
  textMiddle: {
    ...itemStyle,
    alignSelf: "flex-end",
  },
  textEnd: {
    ...itemStyle,
  },
});

export default BoxScreen;
