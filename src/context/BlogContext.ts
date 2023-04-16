import React, { useContext, Reducer } from "react";

import { BlogPost, Action } from "../types";
import { createDataContext } from "./createDataContext";

const getId = () => Math.floor(Math.random() * 999999).toString();

const ACTION = {
  ADD_BLOGPOST: "ADD_BLOGPOST",
  DELETE_BLOGPOST: "DELETE_BLOGPOST",
} as const;

type Context = {
  data: BlogPost[];
  addBlogPost: () => void;
};

const blogReducer: Reducer<Context["data"], { type: string; payload?: any }> = (
  state,
  action
): BlogPost[] => {
  switch (action.type) {
    case ACTION.ADD_BLOGPOST:
      return [
        ...state,
        { id: getId(), title: `BlogPost #${state.length + 1}` },
      ];
    case ACTION.DELETE_BLOGPOST:
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};

const generateActions = (dispatch: React.Dispatch<Action>) => ({
  addBlogPost: () => {
    dispatch({ type: ACTION.ADD_BLOGPOST });
  },
  deleteBlogPost: (id: string) => {
    dispatch({ type: ACTION.DELETE_BLOGPOST, payload: id });
  },
});

export const { Context, Provider } = createDataContext(
  blogReducer,
  generateActions,
  []
);

export const useBlogContext = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error("No context found. Check your scope.");
  }

  return context;
};
