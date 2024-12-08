import AuthScreen from "@/components/screens/AuthScreen";
import { Text, View } from "react-native";
import "../global.css";

export default function Index() {
  return (
    <View className="flex-1">
      <AuthScreen />
    </View>
  );
}
