import React from "react";
import { View, StyleSheet } from "react-native";

import { LIGHT_GREY } from "../../constants";
import EmptyImage from "./EmptyImage";

const ResultDetailsSkeleton = () => (
  <View style={styles.detailsContainer}>
    <EmptyImage />
    <View style={styles.detailsTitle} />
    <View style={styles.detailsRating} />
  </View>
);

const ResultsListLoading = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.title} />
      <View style={styles.list}>
        <ResultDetailsSkeleton />
        <ResultDetailsSkeleton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    rowGap: 5,
    marginBottom: 10,
  },
  title: {
    height: 30,
    backgroundColor: LIGHT_GREY,
    width: 150,
    borderRadius: 5,
  },
  list: {
    flexDirection: "row",
    columnGap: 15,
    overflow: "hidden",
  },
  detailsContainer: {
    rowGap: 5,
  },
  detailsTitle: {
    height: 20,
    backgroundColor: LIGHT_GREY,
    borderRadius: 5,
  },
  detailsRating: {
    height: 15,
    backgroundColor: LIGHT_GREY,
    borderRadius: 5,
  },
});

export default ResultsListLoading;
