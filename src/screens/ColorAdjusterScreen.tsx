import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";

import ColorCounter from "../components/ColorCounter";
import { getRandomInt } from "../lib";
import { Color } from "../types";

const STEP = 20;
const MIN = 0;
const MAX = 255;
const INIT_STATE = {
  red: getRandomInt(MIN, MAX),
  green: getRandomInt(MIN, MAX),
  blue: getRandomInt(MIN, MAX),
};
const getUpdateNumber = (updateValue: number) => {
  if (updateValue < MIN) return MAX;
  if (updateValue > MAX) return MIN;
  return updateValue;
};

type State = Record<Color, number>;

const colorReducer = (
  state: State,
  action: { type: Color; payload: number }
): State => {
  switch (action.type) {
    case "red":
      return { ...state, red: getUpdateNumber(state.red + action.payload) };
    case "green":
      return { ...state, green: getUpdateNumber(state.green + action.payload) };
    case "blue":
      return { ...state, blue: getUpdateNumber(state.blue + action.payload) };
    default:
      throw new Error("Not suppported color");
  }
};

const ColorAdjusterScreen = (): JSX.Element => {
  const [state, dispatch] = useReducer(colorReducer, INIT_STATE);

  const { red, green, blue } = state;

  const handleMore = (color: Color) =>
    dispatch({
      type: color,
      payload: STEP,
    });

  const handleLess = (color: Color) =>
    dispatch({
      type: color,
      payload: -1 * STEP,
    });

  return (
    <View style={styles.container}>
      <Text>Color Adjuster</Text>

      <ColorCounter
        color="red"
        handleIncrease={handleMore}
        handleDecrease={handleLess}
      />

      <ColorCounter
        color="green"
        handleIncrease={handleMore}
        handleDecrease={handleLess}
      />

      <ColorCounter
        color="blue"
        handleIncrease={handleMore}
        handleDecrease={handleLess}
      />

      <View
        style={{
          width: 200,
          height: 200,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  square: {
    width: 100,
    height: 100,
  },
});

export default ColorAdjusterScreen;
