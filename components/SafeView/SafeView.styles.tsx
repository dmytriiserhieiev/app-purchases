import { ImageStyle, StyleSheet, ViewStyle } from "react-native";

interface SafeViewStyles {
  mainContainer: ViewStyle;
}

export const styles = StyleSheet.create<SafeViewStyles>({
  mainContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
});
