import { Text, View } from "react-native";
import FormInputs from "@/components/FormInputs";

export default function Login() {
  return (
    <>
      <View
        className={"flex items-center gap-2 justify-center w-full h-full bg-white"}
      >
        <FormInputs formName="Email" />
        <FormInputs formName="Senha" />

      </View>
    </>
  );
}
