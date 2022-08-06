import React from "react";
import { StyleSheet, View, Image } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
        <Image resizeMode='contain' style={styles.icon} source={require("../../../assets/on-air-logo.png")} />
    </View>
  );
}

export default Header

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#121112",
    borderBottomColor: "#FC4D3C",
    borderWidth: 1
  },
  icon: {
    flex: 1,
    width: 120,
    height: 120,
    resizeMode: "contain",
  }
});