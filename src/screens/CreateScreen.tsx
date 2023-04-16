import React from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import BlogPostForm from "../components/BlogPostForm";
import { useBlogContext } from "../context/BlogContext";
import { pageStyles } from "../constants";
import { BlogPost } from "../types";

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
  const { navigate } = useNavigation();
  const { addBlogPost } = useBlogContext();

  const handleSubmit = ({ title, content }: Omit<BlogPost, "id">) => {
    if (!isFormValid({ title, content })) {
      return;
    }
    addBlogPost({ title, content, onSuccess: () => navigate("Home" as never) });
  };

  return (
    <View style={styles.container}>
      <BlogPostForm
        labels={["Enter Title: ", "Enter Content: "]}
        onSubmit={handleSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...pageStyles,
    paddingTop: 50,
  },
});

export default CreateScreen;
