import React, { useState, useContext } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import axios from "axios";
import { UserContext } from "../context/UserProvider";

export default function Login() {
  const { user, login } = useContext(UserContext);

  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (emailInputValue && passwordInputValue) {
      try {
        const response = await axios.get(
          `https://shopping-app-backend-6p1u.onrender.com/users`
        );

        if (response && response.data) {
          let user = response.data.find(
            (user) => user.email === emailInputValue
          );

          if (user) {
            if (user.password === passwordInputValue) {
              login(user);
            } else {
              setError("Incorrect password");
            }
          } else {
            setError("User not found");
          }
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      setError("Please enter email and password");
    }
  };

  return (
    <View style={styles.form_container}>
      {user?.nickName ? (
        <Text>
          Welcome back, {user?.nickName}! <br />
          Enjoy your shopping!
        </Text>
      ) : (
        <>
          <Text>
            Nice to see you again! 🍬 <br />
            Log in and treat yourself to a pleasant experience!
          </Text>

          <View style={styles.login_form}>
            <View style={styles.form_item}>
              <Text htmlFor="email">Email</Text>
              <TextInput
                style={styles.input}
                keyboardType="email-address"
                onChangeText={(text) => setEmailInputValue(text)}
                value={emailInputValue}
              />
            </View>

            <View style={styles.form_item}>
              <Text htmlFor="password">Password</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                onChangeText={(text) => setPasswordInputValue(text)}
                value={passwordInputValue}
              />
            </View>

            <Button onPress={handleSubmit} title="Submit" />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  error: {
    color: "red",
    marginTop: 10,
  },
});
