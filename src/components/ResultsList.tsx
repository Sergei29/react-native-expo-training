import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { BusinessSummaryFormated } from "../types";
import ResultDetails from "./ResultDetails";

interface IProps {
  title: string;
  results: BusinessSummaryFormated[];
}

const ResultsList = ({ title, results }: IProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title + ` ${results.length}`}</Text>
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
});

export default ResultsList;
