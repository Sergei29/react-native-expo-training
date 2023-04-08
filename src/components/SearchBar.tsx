import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const LIGHT_GREY = "#f0eeee";

interface IProps {
  term: string;
  setTerm: React.Dispatch<React.SetStateAction<string>>;
  handleSearchSubmit: () => void;
}

const SearchBar = ({
  handleSearchSubmit,
  term,
  setTerm,
}: IProps): JSX.Element => {
  return (
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
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: LIGHT_GREY,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 15,
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
