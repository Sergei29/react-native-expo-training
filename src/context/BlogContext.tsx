import React, { createContext, useContext, useState } from "react";

import { blogPosts as blogPostsList } from "../data";
import { BlogPost } from "../types";

type Context = {
  data: BlogPost[];
  addBlogPost: () => void;
};

const BlogContext = createContext<Context | null>(null);
BlogContext.displayName = "BlogContext";

interface IProps {
  children: React.ReactNode;
}

export const BlogContextProvider = ({ children }: IProps): JSX.Element => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => blogPostsList);

  const addBlogPost = () =>
    setBlogPosts((current) => [
      ...current,
      { id: `${current.length + 1}`, title: `BlogPost #${current.length + 1}` },
    ]);

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  const context = useContext(BlogContext);

  if (!context) {
    throw new Error("No context found. Check your scope.");
  }

  return context;
};
