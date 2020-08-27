import React from "react";
import { View, Text } from "react-native";

export function AppMenuScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>AppMenuScreen Screen</Text>
    </View>
  );
}

export function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

export function WelcomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome Screen</Text>
    </View>
  );
}

export function ChooseYourLanguageScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Choose Lang Screen</Text>
    </View>
  );
}

export function HowToUseThisAppScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>How to use Screen</Text>
    </View>
  );
}
