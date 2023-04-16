import React from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";

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

const EditScreen = (): JSX.Element => {
  const { params } = useRoute<RouteProp<{ params: { id: string } }>>();
  const { navigate } = useNavigation();
  const { state, editBlogPost } = useBlogContext();

  const currentBlogPost = state.find((current) => current.id === params.id);

  const handleSubmit = ({ title, content }: Omit<BlogPost, "id">) => {
    if (!isFormValid({ title, content }) || !currentBlogPost?.id) {
      return;
    }
    editBlogPost({
      id: currentBlogPost.id,
      title,
      content,
      onSuccess: () => navigate("Home" as never),
    });
  };

  return (
    <View style={styles.container}>
      <BlogPostForm
        labels={["Enter New Title: ", "Enter New Content: "]}
        initialValues={currentBlogPost}
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

export default EditScreen;
