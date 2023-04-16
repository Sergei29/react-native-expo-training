import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import ActionButton from "../components/ActionButton";
import { useBlogContext } from "../context/BlogContext";
import { pageStyles } from "../constants";

interface IListItemProps {
  title: string;
  handleDelete: (event: GestureResponderEvent) => void;
  handleSelect: () => void;
  isLastChild?: boolean;
}

const ListItem = ({
  title,
  handleDelete,
  handleSelect,
  isLastChild = false,
}: IListItemProps) => {
  return (
    <TouchableOpacity onPress={handleSelect}>
      <View style={!isLastChild ? styles.listItem : styles.listItemLast}>
        <Text style={styles.listItemTitle}>{title}</Text>
        <ActionButton onPress={handleDelete} style={styles.deleteButton}>
          <Feather name="trash" size={24} color="black" />
        </ActionButton>
      </View>
    </TouchableOpacity>
  );
};

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
          <ListItem
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
  deleteButton: {
    zIndex: 100,
  },
});

export default HomeScreen;
