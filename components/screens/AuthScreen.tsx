import { Link } from "expo-router";
import React, { useState } from "react";
import { Button, Text, View, TextInput, TouchableOpacity } from "react-native";
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
    <View className="bg-blue-500 rounded-b-2xl">
      <View className="px-4 justify-between">
        <Button title="Login" onPress={handleLoginClick} />
        <Button title="Register" onPress={handleRegisterClick} />
      </View>
      {isRegistering ? (
        <View>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            className="px-4 bg-gray-300 rounded-xl ml-2 mr-2 mt-4"
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            className="px-4 bg-gray-300 rounded-xl ml-2 mr-2 mt-4"
          />
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            className="px-4 bg-gray-300 rounded-xl ml-2 mr-2 mt-4"
          />
          <View>
            <Button title="Submit" onPress={handleRegister} color="#45FF4B" />
          </View>
        </View>
      ) : (
        // Login Form
        <View>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            className="px-4 bg-gray-300 rounded-xl ml-2 mr-2 mt-4"
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            className="px-4 bg-gray-300 rounded-xl ml-2 mr-2 mt-4"
          />
          <View className="bg-green-400 py-4">
            <Text className="text-center text-xl font-bold">Login</Text>
            {/* <Button title="Login" onPress={handleLogin} color="#45FF4B" /> */}
          </View>

          <Text>Forgot Password ?</Text>
        </View>
      )}
    </View>
  );
};

export default AuthScreen;
