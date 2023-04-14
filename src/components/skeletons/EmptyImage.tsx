import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { LIGHT_GREY } from "../../constants";

interface IProps {
  message?: string;
}

const EmptyImage = ({ message }: IProps): JSX.Element => (
  <View style={styles.emptyImage}>
    {message && <Text style={styles.message}>{message}</Text>}
  </View>
);

const styles = StyleSheet.create({
  emptyImage: {
    width: 250,
    height: 150,
    borderRadius: 5,
    marginBottom: 5,
    backgroundColor: LIGHT_GREY,
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    color: "grey",
    fontSize: 18,
  },
});

export default EmptyImage;
