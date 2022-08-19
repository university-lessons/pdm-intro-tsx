import { Text, View } from "react-native";
import MyButton from "../../components/MyButton";

import styles from "./styles";

export default function Home() {
  console.log("codigo normal!");

  const myValue = "My Value Uhuu!";

  return (
    <View style={styles.container}>
      <Text>Page Home - {myValue}</Text>
      <MyButton />
    </View>
  );
}
