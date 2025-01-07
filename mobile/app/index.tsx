import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Home() {
  return (
    <>
      <View style={styles.container}>
        <Text>Funciona!</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
