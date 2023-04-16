import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

import { BlogPost } from "../types";

interface IProps {
  onSubmit: (formValues: Omit<BlogPost, "id">) => void;
  initialValues?: BlogPost;
  labels: [string, string];
}

const BlogPostForm = ({
  initialValues,
  onSubmit,
  labels,
}: IProps): JSX.Element => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { title: currentTitle, content: currentContent } = initialValues || {};

  const handleSubmit = () => {
    onSubmit({ title, content });
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
        <Text style={styles.label}>{labels[0]}</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            setTitle(text);
          }}
          value={title}
        />
      </View>

      <View>
        <Text style={styles.label}>{labels[1]}</Text>
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

export default BlogPostForm;
