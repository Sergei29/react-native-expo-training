import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from "react-native";

interface IProps {
  title: string;
  imageSource: ImageSourcePropType;
  imageScore?: number;
}

const ImageDetail = ({
  title,
  imageSource,
  imageScore = 0,
}: IProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text>{`Image score - ${imageScore}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    columnGap: 16,
    marginVertical: 16,
  },
  image: {
    flex: 1,
  },
  text: {
    flex: 1,
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
  },
});

export default ImageDetail;
