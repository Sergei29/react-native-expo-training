import React, { createContext, useReducer, Reducer } from "react";

import { Action } from "../types";

type ProviderProps = {
  children: React.ReactNode;
};

export const createDataContext = <S, ActionsMap, A = Action>(
  reducer: Reducer<S, A>,
  generateActions: (dispatch: React.Dispatch<A>) => ActionsMap,
  initialState: S
) => {
  const Context = createContext<
    | ({
        state: S;
      } & ActionsMap)
    | null
  >(null);

  const Provider = ({ children }: ProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const actions = generateActions(dispatch);

    return (
      <Context.Provider value={{ state, ...actions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
