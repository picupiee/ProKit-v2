import { Link } from "expo-router";
import React, { useState } from "react";
import { Button, Text, View, TextInput } from "react-native";
import { auth } from "../../src/utils/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const AuthScreen = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLoginClick = () => {
    setIsRegistering(false);
  };

  const handleRegisterClick = () => {
    setIsRegistering(true);
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Invalid login details: ", error);
    }
  };

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error creating an account: ", error);
    }
  };

  return (
    <View>
      <View>
        <Button title="Login" onPress={handleLoginClick} />
        <Button title="Register" onPress={handleRegisterClick} />
      </View>

      {isRegistering ? (
        <View>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Button title="Submit" onPress={handleRegister} />
        </View>
      ) : (
        // Login Form
        <View>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Button title="Login" onPress={handleLogin} />
        </View>
      )}
    </View>
  );
};

export default AuthScreen;
