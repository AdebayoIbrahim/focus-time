import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
} from "react-native";
import { Colors } from "@/utils/colors";

interface RoundedButtonProps {
  style?: StyleProp<ViewStyle>;
  size?: number;
  title: string;
  textStyle?: StyleProp<TextStyle>;
  onClick?: (e: GestureResponderEvent | string | number) => void;
  [key: string]: any;
}

const Roundedbutton: React.FC<RoundedButtonProps> = ({
  style,
  size = 75,
  textStyle,
  onClick,
  title,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[style, styles(size).radiusrounded]}
      onPress={onClick}
      {...props}
    >
      <Text style={[textStyle, styles(size).textcolor]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size: number) =>
  StyleSheet.create({
    radiusrounded: {
      backgroundColor: "transparent",
      justifyContent: "center",
      alignItems: "center",
      width: size,
      borderRadius: size / 2,
      height: size,
      borderWidth: 2,
      borderColor: Colors.whiteaccent,
    },

    textcolor: {
      color: Colors.whiteaccent,
    },
  });

export default Roundedbutton;
