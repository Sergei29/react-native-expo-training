import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { Color } from "../types";

interface IProps {
  color: Color;
  handleIncrease: (color: Color) => void;
  handleDecrease: (color: Color) => void;
}

const ColorCounter = ({
  color,
  handleIncrease,
  handleDecrease,
}: IProps): JSX.Element => (
  <View style={styles.counter}>
    <Text style={styles.title}>{color}</Text>
    <Button title={`More ${color}`} onPress={() => handleIncrease(color)} />
    <Button title={`Less ${color}`} onPress={() => handleDecrease(color)} />
  </View>
);

const styles = StyleSheet.create({
  title: {
    textTransform: "capitalize",
  },
  counter: {
    padding: 8,
    marginVertical: 16,
    gap: 8,
  },
});

export default ColorCounter;
