import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

interface IProps {
  name: string;
  imageUrl: string;
  reviewCount: number;
  rating: number;
  pathname: string;
}

const ResultDetails = ({
  name,
  imageUrl,
  reviewCount,
  rating,
  pathname,
}: IProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
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
