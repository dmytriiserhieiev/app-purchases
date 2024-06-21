import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./ProductCard.styles";
import { ProductCardProps } from "./ProductCard.types";
import { Colors } from "@/constants/Colors";
import { Button } from "../Button";

function ImageCollage({ imageUrl, name, price, onPress, buttonTitle }: ProductCardProps) {
  return (
    <View style={styles.mainContainer}>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={styles.productImage}
      />
      <View style={styles.infoContainer}>
        <View>
          <Text>{name}</Text>
          <Text>{price}</Text>
        </View>
        <Button title={buttonTitle} onPress={onPress} />
      </View>
    </View>
  );
}

export default ImageCollage;
