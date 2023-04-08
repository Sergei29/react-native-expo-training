import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import SearchBar from "../components/SearchBar";

interface IProps {
  [x: string]: any;
}

const SearchScreen = ({}: IProps): JSX.Element => {
  const handleSubmit = (term: string) => {
    console.log({ term });
  };

  return (
    <View style={styles.screen}>
      <SearchBar handleSearchSubmit={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#fff",
    height: "100%",
  },
});

export default SearchScreen;
