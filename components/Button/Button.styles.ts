import { StyleSheet, ViewStyle } from "react-native";

interface ButtonStyles {
  mainContainer: ViewStyle;
}

export const styles = StyleSheet.create<ButtonStyles>({
  mainContainer: {
    borderRadius: 4,
    borderWidth: 1,
    padding: 6,
  },
});
