import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

import { LIGHT_GREY } from "../constants";

interface IProps {
  term: string;
  setTerm: React.Dispatch<React.SetStateAction<string>>;
  handleSearchSubmit: () => void;
}

const SearchBar = ({
  handleSearchSubmit,
  term,
  setTerm,
}: IProps): JSX.Element => (
  <View style={styles.container}>
    <Feather name="search" style={styles.icon} />
    <TextInput
      placeholder="Search"
      autoCapitalize="none"
      autoCorrect={false}
      style={styles.input}
      onChangeText={setTerm}
      onEndEditing={handleSearchSubmit}
      value={term}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: LIGHT_GREY,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    columnGap: 8,
  },
  icon: {
    fontSize: 35,
  },
  input: {
    height: "100%",
    fontSize: 24,
    flex: 1,
  },
});

export default SearchBar;
