import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";

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

interface IProps {
  [x: string]: any;
}

const EditScreen = ({}: IProps): JSX.Element => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { params } = useRoute<RouteProp<{ params: { id: string } }>>();
  const { navigate } = useNavigation();
  const { state, editBlogPost } = useBlogContext();

  const {
    id,
    title: currentTitle,
    content: currentContent,
  } = state.find((current) => current.id === params.id) || {};

  const handleSubmit = () => {
    if (!isFormValid({ title, content }) || !id) {
      return;
    }
    editBlogPost({
      id,
      title,
      content,
      onSuccess: () => navigate("Home" as never),
    });
  };

  useEffect(() => {
    if (!currentTitle || !currentContent) {
      return;
    }
    setTitle(currentTitle);
    setContent(currentContent);
  }, [currentTitle, currentContent]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Enter New Title: </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            setTitle(text);
          }}
          value={title}
        />
      </View>

      <View>
        <Text style={styles.label}>Enter New Content: </Text>
        <TextInput
          editable
          multiline
          numberOfLines={4}
          style={styles.input}
          onChangeText={(text) => {
            setContent(text);
          }}
          value={content}
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

export default EditScreen;
