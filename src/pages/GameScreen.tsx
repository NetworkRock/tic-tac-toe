import React from "react";
import { View } from "react-native";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import GameArea from "../components/Main/GameArea";

const GameScreen = () => (
  <View
    style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#e3e1e5",
    }}
  >
    <Header />
    <GameArea />
    <Footer />
  </View>
);

export default GameScreen;
