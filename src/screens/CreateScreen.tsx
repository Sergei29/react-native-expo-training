import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useBlogContext } from "../context/BlogContext";
import { pageStyles } from "../constants";

const isFormValid = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return !!title.trim() && !!content.trim();
};

const CreateScreen = (): JSX.Element => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { navigate } = useNavigation();
  const { addBlogPost } = useBlogContext();

  const handleSubmit = () => {
    if (!isFormValid({ title, content })) {
      return;
    }
    addBlogPost({ title, content, onSuccess: () => navigate("Home" as never) });
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Enter Title: </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            setTitle(text);
          }}
        />
      </View>

      <View>
        <Text style={styles.label}>Enter Content: </Text>
        <TextInput
          editable
          multiline
          numberOfLines={4}
          style={styles.input}
          onChangeText={(text) => {
            setContent(text);
          }}
        />
      </View>

      <View style={styles.submit}>
        <Button title="Save" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...pageStyles,
    paddingTop: 50,
    rowGap: 16,
  },
  label: {
    fontSize: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: "grey",
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 18,
  },
  submit: {
    width: "60%",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 30,
  },
});

export default CreateScreen;
