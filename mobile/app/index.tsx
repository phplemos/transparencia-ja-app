import { View, Text, Button } from "react-native";
import FormInputs from "@/components/FormInputs";
import { router, Link } from "expo-router";
import Checkbox from "expo-checkbox";
import { useState } from "react";

export default function Login() {
  const [isRemenber, setIsRemenber] = useState(false);

  function handleLogin() {
    router.push("/(auth)/home");
  }

  return (
    <View
      className={
        "flex flex-col items-center justify-center gap-6 h-full w-full bg-white"
      }
    >
      <View className={"flex items-center gap-2 justify-center w-full h-auto"}>
        <FormInputs formName="Email" />
        <FormInputs formName="Senha" />
      </View>
      <View className={"flex flex-row items-center gap-6 justify-center"}>
        <View className={"flex flex-row align-center gap-2"}>
          <Checkbox
            className="bg-blue-500"
            value={isRemenber}
            onValueChange={setIsRemenber}
          />
          <Text>Lembrar minha senha</Text>
        </View>
        <View className={"flex flex-row align-center gap-2"}>
          <Link href={"/recuperar-senha"}>Recuperar senha</Link>
        </View>
      </View>
      <View>
        <Button title="Enviar" onPress={handleLogin} />
      </View>
    </View>
  );
}
