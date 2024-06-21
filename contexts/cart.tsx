import { Product } from "@/types";
import React, { ReactNode, createContext, useContext, useState } from "react";

interface QuizContextType {
  products: Product[];
  clear: () => void;
  addProduct: (product: Product) => void;
  removeProduct: (productId: string) => void;
}

export const CartContext = createContext<QuizContextType | undefined>(
  undefined
);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([]);

  const clear = () => {
    setProducts([]);
  };

  const removeProduct = (productId: string) => {
    setProducts((prev) => prev.filter((product) => product.id !== productId));
  };

  const addProduct = (product: Product) => {
    const itemExists = !!products.filter((item) => item.id === product.id)
      .length;

    if (itemExists) {
      setProducts((prev) =>
        prev.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity! + product.quantity! };
          }
          return item;
        })
      );
    } else {
      setProducts((prev) => [...prev, product]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        clear,
        addProduct,
        products,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("Couldn't initialize the Cart context");
  }
  return context;
};
