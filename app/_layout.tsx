import { Stack } from "expo-router";
import React, { ReactNode } from "react";
import { StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          // title: "Focustime",
          headerStyle: {
            backgroundColor: "fff",
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
