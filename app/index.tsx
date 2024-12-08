import AuthScreen from "@/components/screens/AuthScreen";
import { ScrollView, Text, View } from "react-native";
import "../global.css";
import TestScreen from "@/components/screens/TestScreen";
import { NavigationContainer } from "@react-navigation/native";

export default function Index() {
  return (
    <ScrollView>
      <AuthScreen />
      <TestScreen />
    </ScrollView>
  );
}
