import { Link } from "expo-router";
import React, { useState } from "react";
import { Button, Text, View, TextInput, TouchableOpacity } from "react-native";
import { auth } from "../../src/utils/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { SafeAreaView } from "react-native-safe-area-context";

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
    <SafeAreaView className="flex-1">
      <View className="flex-1 justify-center items-center px-4 bg-gray-100">
        <Text>Welcome to ProKit</Text>
        <View className="flex-row justify-center space-x-4">
          <TouchableOpacity
            className={`px-4 py-2 rounded ${
              !isRegistering
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onPress={handleLoginClick}
          >
            <Text>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`px-4 py-2 rounded ${
              !isRegistering
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onPress={handleRegisterClick}
          >
            <Text>Register</Text>
          </TouchableOpacity>
        </View>

        {isRegistering ? (
          <View>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              className="border border-gray-300 px-4 py-2 rounded mt-4 mb-2 placeholder-gray-400"
            />
            <TextInput
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              className="border border-gray-300 px-4 py-2 rounded mt-4 mb-2 placeholder-gray-400"
            />
            <TextInput
              placeholder="Confirm Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              className="border border-gray-300 px-4 py-2 rounded mt-4 mb-2 placeholder-gray-400"
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
              className="border border-gray-300 px-4 py-2 rounded mt-4 mb-2 placeholder-gray-400"
            />
            <TextInput
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              className="border border-gray-300 px-4 py-2 rounded mt-4 mb-2 placeholder-gray-400"
            />
            <TouchableOpacity
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4 w-full"
              onPress={handleLogin} // or handleRegister, depending on the form
            >
              <Text className="text-center">Login</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default AuthScreen;
