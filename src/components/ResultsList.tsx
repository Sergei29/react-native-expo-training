import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { BusinessSummaryFormated } from "../types";
import ResultsListLoading from "./skeletons/ResultsListLoading";
import ResultDetails from "./ResultDetails";

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
  const navigation = useNavigation();

  if (isLoading) {
    return <ResultsListLoading />;
  }

  if (!isLoading && results.length === 0) {
    return null;
  }

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(
                "ResultShow" as never,
                {
                  id: item.alias,
                } as never
              )
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
