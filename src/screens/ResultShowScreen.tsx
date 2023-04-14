import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import useBusinessDetails from "../hooks/useBusinessDetails";
import EmptyImage from "../components/skeletons/EmptyImage";
import { RootStackParamList } from "../types";

const Loader = () => (
  <View style={styles.loader}>
    <EmptyImage />
    <EmptyImage />
    <EmptyImage />
  </View>
);

const Error = ({ message = "Business not found." }: { message?: string }) => (
  <View style={styles.error}>
    <Text style={styles.errorMessage}>{message}</Text>
  </View>
);

type Props = NativeStackScreenProps<RootStackParamList, "ResultShow">;

const ResultShowScreen = ({ route }: Props): JSX.Element => {
  const id = route.params.id;

  const { data, loading, error } = useBusinessDetails({ id });

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Error message={error!} />;
  }
  if (!data) {
    return <Error message="Business not found." />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.name}</Text>
      <FlatList
        data={data.photos}
        keyExtractor={(src) => src}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    paddingTop: 50,
    gap: 15,
  },
  error: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorMessage: {
    color: "red",
    fontSize: 18,
  },
  title: {
    fontSize: 24,
    alignSelf: "center",
    marginVertical: 15,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 5,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default ResultShowScreen;
