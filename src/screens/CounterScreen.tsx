import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

interface IProps {
  [x: string]: any;
}

const CounterScreen = ({}: IProps): JSX.Element => {
  const [counter, setSounter] = useState(0);

  return (
    <View style={styles.container}>
      <Button
        onPress={() => setSounter((current) => current + 1)}
        title="Increment"
      />
      <Button
        onPress={() => setSounter((current) => current - 1)}
        title="Decrement"
      />
      <Text>Current count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});

export default CounterScreen;
