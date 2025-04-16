import { Colors } from "@/utils/colors";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import Roundedbutton from "../Roundedbutton";
import { flexsizes, spacings } from "@/utils/sizes";
export default function Focustime({
  updateFocussubject,
}: {
  updateFocussubject: (subject: string) => void;
}) {
  const [inputFocustext, setFocus] = useState<string | null>(null);

  const hadnlehasFocus = () => {
    if (!inputFocustext || inputFocustext?.trim()?.length < 1) {
      alert("Please Input a valid focus subject");
      return;
    } else {
      updateFocussubject(inputFocustext);
      // cleanup
      setFocus(null);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputcontainer}>
        <TextInput
          label="What do You want to focus on?"
          style={styles.inputbutton}
          onChange={(e) => setFocus(e.nativeEvent.text)}
        ></TextInput>
        <View style={styles.buttoncontainer}>
          <Roundedbutton
            title="+"
            textStyle={{ fontSize: spacings.xxl }}
            size={spacings.xxlv}
            onClick={() => hadnlehasFocus()}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: flexsizes.xl,
  },

  inputcontainer: {
    gap: spacings.sm,
    flexDirection: "row",
    marginInline: spacings.sm,
    // paddingLeft: spacings.md,
  },
  inputbutton: {
    flex: flexsizes.lg + 0.1,
  },
  text: {
    fontSize: spacings.lg,
    color: Colors.whiteaccent,
  },
  buttoncontainer: {
    flex: flexsizes.xs,
    justifyContent: "center",
  },
});
