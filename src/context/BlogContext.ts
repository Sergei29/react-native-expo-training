import React, { useContext, Reducer } from "react";

import { BlogPost, Action } from "../types";
import { createDataContext } from "./createDataContext";

const ACTION = {
  ADD_BLOGPOST: "ADD_BLOGPOST",
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
        { id: `${state.length + 1}`, title: `BlogPost #${state.length + 1}` },
      ];

    default:
      return state;
  }
};

const generateActions = (dispatch: React.Dispatch<Action>) => ({
  addBlogPost: () => {
    dispatch({ type: ACTION.ADD_BLOGPOST });
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
