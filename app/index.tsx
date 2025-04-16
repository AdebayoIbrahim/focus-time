import React, { useState } from "react";
import { Text, StyleSheet, Image, StatusBar } from "react-native";
// import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import { Colors } from "@/utils/colors";
import Focustime from "./components/features/foustime";
import GenericParentView from "./components/UI/genericparentview";
import Timer from "./components/features/Timer";
import Focushistory from "./components/features/focushistory";
export default function Index() {
  const [currentsubject, setCurrentsubject] = useState<string | null>(null);
  const [focushistory, setFocushistory] = useState<string[]>([]);

  const handletimerended = () => {
    setFocushistory((prev) => [...prev, currentsubject!]);
  };
  return (
    <GenericParentView>
      <Stack.Screen
        options={{
          title: "Focustime",
          headerStyle: {
            backgroundColor: Colors.darkblue,
          },
          headerShadowVisible: false,
          headerShown: true,
          headerTintColor: Colors.whiteaccent,
        }}
      />
      {!currentsubject ? (
        <React.Fragment>
          <Focustime updateFocussubject={(data) => setCurrentsubject(data)} />
          <Focushistory history={focushistory} />
        </React.Fragment>
      ) : (
        <Timer
          focusingtasks={currentsubject}
          cancelfocus={() => setCurrentsubject(null)}
          hastimerended={handletimerended}
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
