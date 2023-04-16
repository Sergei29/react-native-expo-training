import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from "react-native";

const ActionButton = ({
  style = {},
  children,
  ...restTouchableOpacityProps
}: TouchableOpacityProps): JSX.Element => {
  const objectLikeStyle = typeof style === "object" ? { ...style } : {};

  return (
    <TouchableOpacity
      style={{ ...styles.actionButton, ...objectLikeStyle }}
      {...restTouchableOpacityProps}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  actionButton: {
    width: 50,
    height: 50,
    backgroundColor: "#eaeaea",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ActionButton;
