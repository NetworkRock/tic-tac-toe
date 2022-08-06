import React from "react";
import { StyleSheet, View } from "react-native";
import GameGrid from './GameGrid';

const GameArea = () => {
  return (
    <View style={styles.container}>
      <View style={styles.gameArea}>
        <GameGrid />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#121112",
  },
  gameArea: {
    height: 250,
    width: 250,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default GameArea;
