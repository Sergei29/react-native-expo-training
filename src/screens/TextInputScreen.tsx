import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const PW_LENGTH_ERROR = "password must be more than 5 characters long";

const isPasswordValid = (pw: string) => {
  if (!pw) return true;
  return pw.length > 5;
};

interface IProps {
  [x: string]: any;
}

const TextInputScreen = ({}: IProps): JSX.Element => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState("");

  useEffect(() => {
    const timeoutToken = setTimeout(() => {
      setError(isPasswordValid(password) ? "" : PW_LENGTH_ERROR);
    }, 800);

    return () => {
      clearTimeout(timeoutToken);
    };
  }, [password]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Text Input Screen</Text>
      <Text style={styles.label}>Enter your name</Text>
      <TextInput
        style={styles.textInput}
        value={name}
        onChangeText={setName}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Text style={styles.label}>Enter your password</Text>
      <TextInput
        style={styles.textInput}
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        textContentType="password"
      />
      {error && <Text style={styles.validationMessage}>{error}</Text>}

      {name && <Text style={styles.greeting}>Hello {name}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  title: {
    marginVertical: 16,
    fontSize: 24,
  },
  label: {
    fontSize: 20,
    marginVertical: 8,
  },
  textInput: {
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
  },
  greeting: {
    fontSize: 20,
    marginTop: 24,
  },
  validationMessage: {
    color: "red",
    fontSize: 14,
  },
});

export default TextInputScreen;
