import { ScrollView, StyleSheet, Text } from "react-native";

import { ProductCard, SafeView } from "@/components";
import { ThemedText } from "@/components/ThemedText";
import { CartContext } from "@/contexts/cart";
import { useContext } from "react";

export default function TabTwoScreen() {
  const context = useContext(CartContext);

  return (
    <SafeView>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ThemedText>PRODUCT LIST</ThemedText>
        {context?.products.length ? (
          context?.products.map((product, index) => (
            <ProductCard
              name={product.display_name}
              price={`${product.quantity}items * ${product.price}$`}
              key={index}
              imageUrl={product.productImageUrl}
              onPress={() => context.removeProduct(product.id)}
              buttonTitle="Remove"
            />
          ))
        ) : (
          <Text>No items</Text>
        )}
      </ScrollView>
    </SafeView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    gap: 8,
    paddingTop: 16,
  },
});
