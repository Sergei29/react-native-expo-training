import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

import { getRandomGgbColor } from "../lib";

interface IProps {
  [x: string]: any;
}

const RandomColorScreen = ({}: IProps): JSX.Element => {
  const [colors, setColors] = useState<string[]>([]);

  const handleGetRandom = () => {
    setColors((current) => [...current, getRandomGgbColor()]);
  };

  return (
    <View style={styles.container}>
      <Text>Get random color</Text>
      <Button title="Add color" onPress={handleGetRandom} />
      <FlatList
        data={colors}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item }) => (
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: item,
              marginVertical: 4,
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
});

export default RandomColorScreen;
