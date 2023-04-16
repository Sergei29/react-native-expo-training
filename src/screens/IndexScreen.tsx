import React from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";

import { useBlogContext } from "../context/BlogContext";

const HomeScreen = (): JSX.Element => {
  const { state, addBlogPost } = useBlogContext();
  return (
    <View style={styles.screen}>
      <Text>Index Screen</Text>
      <Button title="Add" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#fff",
    flex: 1,
  },
});

export default HomeScreen;
