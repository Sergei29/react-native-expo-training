import React from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import ActionButton from "./ActionButton";

const AddNewButon = (): JSX.Element => {
  const { navigate } = useNavigation();

  return (
    <ActionButton
      style={styles.button}
      onPress={() => navigate("Create" as never)}
    >
      <Feather name="plus" size={24} color="black" />
    </ActionButton>
  );
};

const styles = StyleSheet.create({
  button: {
    marginRight: 8,
  },
});

export default AddNewButon;
