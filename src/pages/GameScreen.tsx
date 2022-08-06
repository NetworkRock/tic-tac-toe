import React from "react";
import { View } from "react-native";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import GameArea from "../components/Main/GameArea";
import GameState from "../components/Main/GameState";

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
    <GameState />
    <GameArea />
    <Footer />
  </View>
);

export default GameScreen;
