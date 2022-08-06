import React from "react";
import { Provider } from "react-redux";
import { setupStore } from "./src/store";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <Provider store={setupStore()}>
      <View style={styles.container}>
        <Text>TIC TAC TOE</Text>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
