import React from "react";
import { NavigationScreenConfigProps } from "react-navigation/typescript/react-navigation";
import {
  Text,
  StyleSheet,
  Button,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";

const CONTENT = {
  COMPONENTS_DEMO: "Go to Components Demo",
  LIST_DEMO: "Go to List Demo",
  IMAGE_DEMO: "Go to Images Demo",
};

const screens = [
  { id: "1", path: "Components", title: "Go to Components Demo" },
  { id: "2", path: "List", title: "Go to List Demo" },
  { id: "3", path: "Image", title: "Go to Images Demo" },
  { id: "4", path: "Counter", title: "Go to Counter Demo" },
  { id: "5", path: "Color", title: "Go to Color Demo" },
  { id: "6", path: "ColorAdjust", title: "Go to Color Adjust Demo" },
];

const HomeScreen = ({ navigation }: NavigationScreenConfigProps<any, any>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={screens}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 8 }}>
            <Button
              title={item.title}
              onPress={() => navigation.navigate(item.path)}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    rowGap: 16,
    padding: 8,
  },
  text: {
    fontSize: 30,
  },
  touchableArea: {
    backgroundColor: "yellow",
    paddingVertical: 8,
    paddingLeft: 8,
  },
});

export default HomeScreen;
