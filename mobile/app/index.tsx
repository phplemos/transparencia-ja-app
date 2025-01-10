import { View, Text, TouchableOpacity } from "react-native";
import FormInputs from "@/components/FormInputs";
import { router, Link } from "expo-router";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import Botao from "@/components/Button";
import { AntDesign } from "@expo/vector-icons";

export default function Login() {
  const [isRemenber, setIsRemenber] = useState(false);

  function handleLoginFacebook() {
    router.push("/(auth)/home");
  }

  function handleLoginGoogle() {
    router.push("/(auth)/home");
  }

  function handleLogin() {
    router.push("/(auth)/home");
  }

  function handleCadastro() {
    router.push("/cadastro");
  }

  return (
    <View
      className={
        "flex flex-col items-center justify-evenly  h-full w-full bg-white"
      }
    >
      <View className="flex flex-col items-center justify-center gap-2">
        <Text className={"text-blue-500 text-5xl font-bold"}>Acesse</Text>
        <Text className={"text-blue-500 text-1xl"}>
          Com e-mail e senha para entrar
        </Text>
      </View>
      <View className={"flex items-center justify-between w-full h-auto"}>
        <FormInputs formName="Email" />
        <FormInputs formName="Senha" />
        <View
          className={"flex flex-row items-center justify-evenly w-full m-4"}
        >
          <View className={"flex flex-row items-center justify-center gap-2"}>
            <Checkbox
              color={"#3b82f6"}
              className="bg-white"
              value={isRemenber}
              onValueChange={setIsRemenber}
            />
            <Text>Lembrar minha senha</Text>
          </View>
          <View className={"flex flex-row items-center gap-2"}>
            <Link href={"/recuperar-senha"}>Recuperar senha</Link>
            <AntDesign nome="google" size={32} color="green" />
          </View>
        </View>
        <View className="flex flex-row justify-evenly w-full ">
          <Botao nome="Acessar" color="blue" onPress={handleLogin} />
          <Botao nome="Cadastrar" color="white" onPress={handleCadastro} />
        </View>
      </View>
      <View className="flex flex-col items-center justify-center">
        <View className="flex flex-row items-center mb-8">
          <View className="flex-1 bg-blue-500 h-1 m-4" />
          <View>
            <Text className="text-blue-500 text-1xl flex flex-row items-center">
              Ou continue com
            </Text>
          </View>
          <View className="flex-1 bg-blue-500 h-1 m-4" />
        </View>
        <View className="flex flex-row w-full">
          <TouchableOpacity className="mx-4" onPress={handleLoginGoogle}>
            <AntDesign name="google" size={35} color={"#3b82f6"} />
          </TouchableOpacity>
          <TouchableOpacity className="mx-4" onPress={handleLoginFacebook}>
            <AntDesign name="facebook-square" size={35} color={"#3b82f6"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
