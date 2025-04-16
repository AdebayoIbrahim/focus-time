import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { fontsizes, spacings } from "@/utils/sizes";
import { Colors } from "@/utils/colors";
const Focushistory = ({ history }: { history: string[] }) => {
  if (!history || history.length < 1) {
    return (
      <View style={styles.container}>
        <Text style={styles.textlist}>You are yet to Focus on a Task</Text>
      </View>
    );
  }

  const renderedItem = ({ item }: { item: string }) => {
    return (
      <View>
        <Text style={styles.textlist}>- {item}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textlistheader}>My Focus history:</Text>
      <FlatList data={history} renderItem={renderedItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: spacings.lg,
    paddingInline: spacings.md,
  },

  textlistheader: {
    fontSize: fontsizes.xvl,
    color: Colors.whiteaccent,
  },
  textlist: {
    fontSize: fontsizes.xl,
    paddingTop: spacings.sm,
    color: Colors.whiteaccent,
  },
});
export default Focushistory;
