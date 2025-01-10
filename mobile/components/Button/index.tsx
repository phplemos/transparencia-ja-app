import { TouchableOpacity, View, Text } from "react-native";

type BotaoProps = {
  nome: string;
  color: string;
  onPress: () => void;
};

export default function Botao(props: BotaoProps) {
  const colorVariants = {
    blue: "border-[3px] border-blue-500 bg-blue-500 text-white rounded-md px-12 py-4",
    white:
      "border-[3px] border-blue-500 bg-white text-blue-500 rounded-md px-12 py-4",
  } as any;
  return (
    <View className="flex items-center justify-center">
      <TouchableOpacity
        className={`${colorVariants[props.color]} `}
        onPress={props.onPress}
      >
        <Text
          className={`${
            props.color === "white" ? "text-blue-500" : "text-white"
          }`}
        >
          {props.nome}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
