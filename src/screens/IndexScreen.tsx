import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  GestureResponderEvent,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import BlogListItem from "../components/BlogListItem";
import { useBlogContext } from "../context/BlogContext";
import { pageStyles } from "../constants";

const HomeScreen = (): JSX.Element => {
  const { state, addBlogPost, deleteBlogPost } = useBlogContext();
  const { navigate } = useNavigation();

  const generateDeleteHandler =
    (id: string) => (event: GestureResponderEvent) => {
      deleteBlogPost(id);
      event.stopPropagation();
    };

  return (
    <View style={styles.screen}>
      <FlatList
        style={styles.list}
        data={state}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <BlogListItem
            title={item.title}
            handleDelete={generateDeleteHandler(item.id)}
            handleSelect={() => {
              navigate("Show" as never, { id: item.id } as never);
            }}
            isLastChild={index === state.length - 1}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    ...pageStyles,
  },
  list: {
    marginTop: 8,
  },
});

export default HomeScreen;
