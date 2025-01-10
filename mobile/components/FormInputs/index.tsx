import { View, Text, TextInput } from "react-native"; 
type FormInputsProps = {
  formName: string;
};

export default function FormInputs(props: FormInputsProps) {
  return (
    <>
      <View
        className={"flex items-center gap-2 justify-center w-[90%] h-24 m-2"}
      >
        <View className={"flex w-full items-start "}>
          <Text className={"text-blue-700 text-1"}>{props.formName}</Text>
        </View>
        <TextInput
          className={
            "w-full h-[70%] px-4 bg-slate-100 border border-gray-300 rounded-lg focus:border-blue-500"
          }
          placeholder={`Digite ${props.formName}`}
        />
      </View>
    </>
  );
}
