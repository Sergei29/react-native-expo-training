import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import { NavigationStackScreenProps } from "react-navigation-stack";

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
  navigation: NavigationStackScreenProps["navigation"];
}

const ResultsList = ({
  title,
  results,
  isLoading,
  navigation,
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
          <TouchableOpacity
            onPress={() =>
              navigation.navigate({
                routeName: "ResultShow",
                params: {
                  id: item.alias,
                },
              })
            }
          >
            <ResultDetails
              name={item.name}
              imageUrl={item.image_url}
              reviewCount={item.review_count}
              rating={item.rating}
            />
          </TouchableOpacity>
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

export default withNavigation(ResultsList);
