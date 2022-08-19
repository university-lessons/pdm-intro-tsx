import { Button, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

export default function MyButton() {
  return (
    <TouchableOpacity style={styles.mybutton}>
      <Text style={styles.text}>Click Me!</Text>
    </TouchableOpacity>
  );
}
