import { View, Button } from "react-native";
import FormInputs from "@/components/FormInputs";
import { router } from "expo-router";

export default function Login() {

  function handleLogin(){
    router.push("/(auth)/home");
  }

  return (
    <>
      <View
        className={"flex items-center gap-2 justify-center w-full h-full bg-white"}
      >
        <FormInputs formName="Email" />
        <FormInputs formName="Senha" />
        <Button title="Enviar" onPress={handleLogin}/>
      </View>
    </>
  );
}
