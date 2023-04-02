import React from "react";
import { View, Text, StyleSheet } from "react-native";

import ImageDetail from "../components/ImageDetail";

interface IProps {
  [x: string]: any;
}

const ImageScreen = ({}: IProps): JSX.Element => {
  return (
    <View>
      <Text>Image Screen</Text>
      <View>
        <ImageDetail
          title="Forest"
          imageSource={require("../../assets/forest.jpg")}
          imageScore={5}
        />
        <ImageDetail
          title="Beach"
          imageSource={require("../../assets/beach.jpg")}
          imageScore={9}
        />
        <ImageDetail
          title="Mountain"
          imageSource={require("../../assets/mountain.jpg")}
          imageScore={2}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
