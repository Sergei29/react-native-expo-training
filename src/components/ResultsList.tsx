import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { BusinessSummaryFormated } from "../types";
import ResultDetails from "./ResultDetails";

const Loading = () => (
  <View style={styles.loading}>
    <Text>Loading...</Text>
  </View>
);

interface IProps {
  isLoading: boolean;
  title: string;
  results: BusinessSummaryFormated[];
}

const ResultsList = ({
  title,
  results,
  isLoading,
}: IProps): JSX.Element | null => {
  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && results.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ResultDetails
            name={item.name}
            imageUrl={item.image_url}
            reviewCount={item.review_count}
            rating={item.rating}
            pathname={`/${item.alias}`}
          />
        )}
        style={styles.list}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 24,
    marginVertical: 8,
    marginHorizontal: 15,
  },
  list: {
    minHeight: 50,
  },
  loading: {
    height: 165,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ResultsList;
