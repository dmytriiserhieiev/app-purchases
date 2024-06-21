import { Text, TouchableOpacity } from "react-native";
import { styles } from "./Button.styles";
import { ButtonProps } from "./Button.types";

function Button({ onPress, title }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.mainContainer}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;
