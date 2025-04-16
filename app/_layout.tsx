import { Colors } from "@/utils/colors";
import { Stack } from "expo-router";
import React, { ReactNode } from "react";
import { StyleSheet, StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={Colors.darkblue} />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "black",
          },
          headerTitleAlign: "center",
          // headerLeft: () => (
          //   <Image
          //     style={styles.image}
          //     source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          //   />
          // ),
          // headerTintColor: "#fff",
          // headerTitleStyle: {
          //   fontWeight: "bold",
          // },
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});
