import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import { Button, ProductCard, SafeView } from "@/components";
import { ThemedText } from "@/components/ThemedText";
import { PRODUCTS_MOCKUP } from "@/constants/Mockups";
import { CartContext } from "@/contexts/cart";
import { Product } from "@/types";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useContext, useRef, useState } from "react";

export default function HomeScreen() {
  const cartAddModalRef = useRef<BottomSheetModal>(null);

  const [selectedModalItem, setSelectedModalItem] = useState<Product>();
  const [itemQuantity, setItemQuantity] = useState(1);

  const context = useContext(CartContext);

  const handleOpenModal = (item: any) => {
    setSelectedModalItem(item);
    setItemQuantity(1);
    if (!item) {
      return;
    }
    cartAddModalRef.current?.present();
  };

  return (
    <BottomSheetModalProvider>
      <SafeView>
        <ThemedText>PRODUCT LIST</ThemedText>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {PRODUCTS_MOCKUP.map((item, index) => (
            <ProductCard
              key={index}
              name={item.display_name}
              imageUrl={item.productImageUrl}
              price={`${item.price}$`}
              onPress={() => handleOpenModal(item)}
              buttonTitle="Add to cart"
            />
          ))}
        </ScrollView>
      </SafeView>
      <BottomSheetModal snapPoints={["30%"]} index={0} ref={cartAddModalRef}>
        <BottomSheetView style={styles.modalMainContainer}>
          <Image
            source={{ uri: selectedModalItem?.productImageUrl }}
            width={56}
            height={56}
          />
          <Text>{selectedModalItem?.display_name}</Text>
          <View style={styles.modalItemAddContainer}>
            <Text>Quantity:</Text>
            <Button
              title="-"
              onPress={() => setItemQuantity((prev) => prev - 1)}
            />
            <Text>{itemQuantity}</Text>
            <Button
              title="+"
              onPress={() => setItemQuantity((prev) => prev + 1)}
            />
          </View>
          <Text>
            Total price:
            {selectedModalItem ? selectedModalItem?.price * itemQuantity : ""}
          </Text>
          <Button
            title="Add"
            onPress={() => {
              if (!selectedModalItem) {
                alert("Invalid product");
                return;
              }
              context?.addProduct({
                display_name: selectedModalItem?.display_name,
                id: selectedModalItem?.id,
                quantity: itemQuantity,
                store_identifier: selectedModalItem?.store_identifier,
                price: selectedModalItem?.price,
                productImageUrl: selectedModalItem?.productImageUrl,
              });
              cartAddModalRef.current?.close();
            }}
          />
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    gap: 8,
    paddingTop: 16,
  },
  modalMainContainer: {
    alignItems: "center",
    gap: 8,
  },
  modalItemAddContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
