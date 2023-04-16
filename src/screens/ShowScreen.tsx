import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";

import { useBlogContext } from "../context/BlogContext";
import { pageStyles } from "../constants";

const NotFound = () => (
  <View style={styles.notFound}>
    <Text>Blog post not found.</Text>
  </View>
);

const ShowScreen = (): JSX.Element => {
  const { params } = useRoute<RouteProp<{ params: { id: string } }>>();
  const { state } = useBlogContext();

  const found = state.find((item) => item.id === params.id);

  if (!found) {
    return <NotFound />;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{found.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  notFound: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    ...pageStyles,
  },
  title: {
    fontSize: 24,
    marginTop: 30,
  },
});

export default ShowScreen;
