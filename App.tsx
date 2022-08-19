import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import About from "./src/pages/About";
import Home from "./src/pages/Home";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <About /> */}
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
});
