import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import EmptyImage from "./EmptyImage";

interface IProps {
  name: string;
  imageUrl: string;
  reviewCount: number;
  rating: number;
}

const ResultDetails = ({
  name,
  imageUrl,
  reviewCount,
  rating,
}: IProps): JSX.Element => {
  return (
    <View style={styles.container}>
      {!!imageUrl ? (
        <Image source={{ uri: imageUrl }} style={styles.image} />
      ) : (
        <EmptyImage message="no image" />
      )}
      <Text style={styles.name}>{name}</Text>
      <Text
        style={styles.rating}
      >{`${rating} Stars, ${reviewCount} Reviews`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 5,
    marginBottom: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  rating: {},
});

export default ResultDetails;
