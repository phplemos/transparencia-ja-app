import { Stack } from "expo-router";
import "react-native-reanimated";
// Import your global CSS file
import "../constants/global.css";

export default function RootLayout() {
  return (
    <Stack >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="cadastro" />
      <Stack.Screen name="recuperar-senha" options={{title:"Recuperar Senha!"}}/>
      <Stack.Screen name="(auth)" options={{headerShown:false}}/>
    </Stack>
  );
}
