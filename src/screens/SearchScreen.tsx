import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import useBusinessSearch from "../hooks/useBusinessSearch";
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";
import { formatBusinessList } from "../lib";

interface IProps {
  [x: string]: any;
}

const SearchScreen = ({}: IProps): JSX.Element => {
  const [term, setTerm] = useState<string>("");
  const [fetchResults, results] = useBusinessSearch({
    onSuccess: () => setTerm(""),
  });

  const handleSubmit = () => {
    fetchResults(term.trim());
  };

  const formattedList = formatBusinessList(results.data);

  return (
    <View style={styles.screen}>
      <SearchBar
        term={term}
        setTerm={setTerm}
        handleSearchSubmit={handleSubmit}
      />
      {results.error ? (
        <Text style={styles.error}>{results.error}</Text>
      ) : (
        <Text style={styles.info}>
          We have found {results.data.length} results
        </Text>
      )}
      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={formattedList.filter((current) => current.range === "cheap")}
        />
        <ResultsList
          title="Bit Pricer"
          results={formattedList.filter(
            (current) => current.range === "medium"
          )}
        />
        <ResultsList
          title="Big Spender!"
          results={formattedList.filter(
            (current) => current.range === "expensive"
          )}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#fff",
    height: "100%",
  },
  error: {
    color: "red",
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 15,
  },
  info: {
    marginHorizontal: 15,
  },
});

export default SearchScreen;
