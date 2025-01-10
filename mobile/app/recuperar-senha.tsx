import { View, Button } from "react-native";
import FormInputs from "@/components/FormInputs";
import { router } from "expo-router";

export default function RecuperarSenha() {
  function handleRecuperarSenha() {
    return router.push("/(auth)/home");
  }

  return (
    <View
      className={
        "flex flex-col items-center justify-center gap-6 h-full w-full bg-white"
      }
    >
      <View className={"flex items-center gap-2 justify-center w-full h-auto"}>
        <FormInputs formName="Email" />
      </View>
      <View>
        <Button title="Enviar" onPress={handleRecuperarSenha} />
      </View>
    </View>
  );
}
