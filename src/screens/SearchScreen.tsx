import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import useBusinessSearch from "../hooks/useBusinessSearch";
import SearchBar from "../components/SearchBar";

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

  /**
   *@description effect to fetch initial data
   to display something on the search page 😀
   */
  useEffect(() => {
    fetchResults("pasta");
  }, []);

  return (
    <View style={styles.screen}>
      <SearchBar
        term={term}
        setTerm={setTerm}
        handleSearchSubmit={handleSubmit}
      />
      {results.error && <Text style={styles.error}>{results.error}</Text>}
      <FlatList
        data={results.data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      />
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
  },
});

export default SearchScreen;
