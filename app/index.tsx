import React, { useState } from "react";
import { Text, StyleSheet, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import { Colors } from "@/utils/colors";
import Focustime from "./components/features/foustime";
import GenericParentView from "./components/UI/genericparentview";
import Timer from "./components/features/Timer";
export default function Index() {
  const [currentsubject, setCurrentsubject] = useState<string | null>(null);
  return (
    <GenericParentView>
      <StatusBar style="auto" />
      <Stack.Screen
        options={{
          title: "Focustime",
          headerStyle: {
            backgroundColor: Colors.whiteaccent,
          },
          headerShown: true,
          headerTintColor: "black",
        }}
      />
      {!currentsubject ? (
        <Focustime updateFocussubject={(data) => setCurrentsubject(data)} />
      ) : (
        <Timer
          focusingtasks={currentsubject}
          cancelfocus={() => setCurrentsubject(null)}
        />
      )}
    </GenericParentView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: Colors.whiteaccent,
  },
});
