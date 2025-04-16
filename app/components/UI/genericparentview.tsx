import React, { Children } from "react";
import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "@/utils/colors";
import { spacings, flexsizes } from "@/utils/sizes";
interface GenericParentViewProps {
  children: React.ReactNode | React.ReactElement;
  style?: React.CSSProperties;
}

const GenericParentView: FC<GenericParentViewProps> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: flexsizes.xl,
    paddingInline: spacings.sm,
    paddingBlock: spacings.lg,
    backgroundColor: Colors.darkblue,
    color: Colors.whiteaccent,
  },
});
export default GenericParentView;
