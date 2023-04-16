import React from "react";
import { StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";

import ActionButton from "./ActionButton";

interface IProps {
  [x: string]: any;
}

const EditButton = ({}: IProps): JSX.Element => {
  const { params } = useRoute<RouteProp<{ params: { id: string } }>>();
  const { navigate } = useNavigation();

  const handleNavigate = () => {
    console.log("Edit, id: ", params.id);
  };

  return (
    <ActionButton onPress={handleNavigate}>
      <Feather name="edit-2" size={24} color="black" />
    </ActionButton>
  );
};

const styles = StyleSheet.create({});

export default EditButton;
