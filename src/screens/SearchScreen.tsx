import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import { fetchData } from "../lib";
import { BusinessSearchResponse, BusinessSummary } from "../types";
import SearchBar from "../components/SearchBar";

interface State {
  data: BusinessSummary[];
  loading: boolean;
  error: null | string;
}

const initState: State = {
  data: [],
  loading: false,
  error: null,
};

interface IProps {
  [x: string]: any;
}

const SearchScreen = ({}: IProps): JSX.Element => {
  const [term, setTerm] = useState<string>("");
  const [results, setResults] = useState<State>(initState);

  const fetchResults = async (seatchTerm: string) => {
    if (!seatchTerm) return;

    setResults({ ...initState, loading: true });

    const { data, error } = await fetchData<BusinessSearchResponse>("/search", {
      params: {
        term: seatchTerm,
        location: "London",
        sort_by: "best_match",
        limit: 50,
      },
    });

    !error && setTerm("");
    setResults((current) => ({
      ...current,
      loading: false,
      error,
      data: data?.businesses || [],
    }));
  };

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
