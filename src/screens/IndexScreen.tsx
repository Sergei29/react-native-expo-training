import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import { useBlogContext } from "../context/BlogContext";

interface IListItemProps {
  title: string;
  handleDelete: () => void;
  isLastChild?: boolean;
}

const ListItem = ({
  title,
  handleDelete,
  isLastChild = false,
}: IListItemProps) => (
  <View style={!isLastChild ? styles.listItem : styles.listItemLast}>
    <Text style={styles.listItemTitle}>{title}</Text>
    <TouchableOpacity onPress={handleDelete}>
      <Feather name="trash" size={24} color="black" />
    </TouchableOpacity>
  </View>
);

const HomeScreen = (): JSX.Element => {
  const { state, addBlogPost, deleteBlogPost } = useBlogContext();
  return (
    <View style={styles.screen}>
      <Button title="Add" onPress={addBlogPost} />
      <FlatList
        style={styles.list}
        data={state}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <ListItem
            title={item.title}
            handleDelete={() => {
              deleteBlogPost(item.id);
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
    backgroundColor: "#fff",
    flex: 1,
    padding: 8,
  },
  list: {
    marginTop: 8,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderColor: "grey",
  },
  listItemLast: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "grey",
  },
  listItemTitle: {
    fontSize: 18,
  },
});

export default HomeScreen;
