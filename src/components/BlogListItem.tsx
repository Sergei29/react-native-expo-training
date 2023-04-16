import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import ActionButton from "./ActionButton";

interface IProps {
  title: string;
  handleDelete: (event: GestureResponderEvent) => void;
  handleSelect: () => void;
  isLastChild?: boolean;
}

const BlogListItem = ({
  title,
  handleDelete,
  handleSelect,
  isLastChild = false,
}: IProps): JSX.Element => {
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

const styles = StyleSheet.create({
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

export default BlogListItem;
