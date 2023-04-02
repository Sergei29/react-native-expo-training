import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";

const friends = [
  { name: "Friend #1", key: "1" },
  { name: "Friend #2", key: "2" },
  { name: "Friend #3", key: "3" },
  { name: "Friend #4", key: "4" },
  { name: "Friend #5", key: "5" },
  { name: "Friend #6", key: "6" },
  { name: "Friend #7", key: "7" },
  { name: "Friend #8", key: "8" },
  { name: "Friend #9", key: "9" },
];

const friends2 = [
  { name: "Friend #1", age: 20 },
  { name: "Friend #2", age: 45 },
  { name: "Friend #3", age: 32 },
  { name: "Friend #4", age: 27 },
  { name: "Friend #5", age: 53 },
  { name: "Friend #6", age: 30 },
  { name: "Friend #7", age: 26 },
  { name: "Friend #8", age: 55 },
  { name: "Friend #9", age: 33 },
];

const ListScreen = (): JSX.Element => {
  const [isVertical, setIsVertical] = useState(true);
  const toggle = () => setIsVertical((current) => !current);

  return (
    <View style={styles.container}>
      <View style={styles.controls}>
        <Text>List Screen</Text>
        <Button
          onPress={toggle}
          title={isVertical ? "horizontal" : "vertical"}
        />
      </View>

      <FlatList
        keyExtractor={(item, index) => `${index}`}
        data={friends2}
        renderItem={({ item }) => (
          <Text style={styles.text}>{`${item.name} - Age ${item.age}`}</Text>
        )}
        horizontal={!isVertical}
        showsHorizontalScrollIndicator={isVertical}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 24,
  },
  text: {
    marginVertical: 50,
    marginHorizontal: 50,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    columnGap: 16,
    marginVertical: 16,
    paddingHorizontal: 8,
  },
});

export default ListScreen;
