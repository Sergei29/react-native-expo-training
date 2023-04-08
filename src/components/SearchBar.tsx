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
  handleSearchSubmit: (newTerm: string) => void;
}

const SearchBar = ({ handleSearchSubmit }: IProps): JSX.Element => {
  const [location, setLocation] = useState<string>("");

  const handleSubmit = (
    _event: NativeSyntheticEvent<TextInputEndEditingEventData>
  ) => {
    handleSearchSubmit(location.trim());
    setLocation("");
  };

  return (
    <View style={styles.container}>
      <Feather name="search" style={styles.icon} />
      <TextInput
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        onChangeText={setLocation}
        onEndEditing={handleSubmit}
        value={location}
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
