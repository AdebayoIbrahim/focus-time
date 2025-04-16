import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { spacings } from "@/utils/sizes";
import { Colors } from "@/utils/colors";
const Focushistory = ({ history }: { history: string[] }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textlist}>history</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: spacings.lg,
    paddingInline: spacings.md,
  },

  textlist: {
    color: Colors.whiteaccent,
  },
});
export default Focushistory;
