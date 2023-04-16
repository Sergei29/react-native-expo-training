export type RootStackParamList = {
  Home: undefined;
  Show: { id: string };
  Create: undefined;
  Edit: { id: string };
};

export interface BlogPost {
  id: string;
  title: string;
}

export interface Action<P = any> {
  type: string;
  payload?: P;
}
