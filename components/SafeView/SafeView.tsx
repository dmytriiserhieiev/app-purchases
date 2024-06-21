import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./SafeView.styles";
import { ProductCardProps } from "./SafeView.types";
import { Colors } from "@/constants/Colors";
import { Button } from "../Button";
import { PropsWithChildren } from "react";

function SafeView({ children }: PropsWithChildren) {
  return <SafeAreaView style={styles.mainContainer}>{children}</SafeAreaView>;
}

export default SafeView;
