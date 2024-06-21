import { ImageStyle, StyleSheet, ViewStyle } from "react-native";

interface ProductCardStyles {
  mainContainer: ViewStyle;
  infoContainer: ViewStyle;
  productImage: ImageStyle;
}

export const styles = StyleSheet.create<ProductCardStyles>({
  mainContainer: {
    flexDirection: "row",
    borderRadius: 12,
    borderWidth: 1,
    alignItems: "center",
    padding: 4,
  },
  infoContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productImage: {
    width: 64,
    height: 64,
    borderRadius: 64 / 2,
    overflow: "hidden",
  },
});
