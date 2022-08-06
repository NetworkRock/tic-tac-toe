import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useSelector } from 'react-redux';
import { selectCurrentPlayer, selectScore } from '../../features/gameSlice';
import Players from '../../models/Players';
import Score from '../../models/Score';
import Circle from "./GameShapes/Circle";
import Cross from "./GameShapes/Cross";

const GameState = () => {
  const score: Score = useSelector(selectScore)
  const currentPlayer: Players = useSelector(selectCurrentPlayer)
  return (
    <View style={styles.container}>
      <View style={styles.player}>
        <Cross />
        {currentPlayer === Players.X ? (
          <Text style={styles.turnFlag}>YOUR TURN</Text>
        ) : null}
      </View>
      <View style={styles.scoreState}>
        <View style={styles.score}>
          <Text style={styles.scoreText}>SCORE</Text>
        </View>
        <View style={styles.points}>
          <Text style={styles.pointsPlayerX}>{score.X}</Text>
          <View style={styles.pointsVerticalLine} />
          <Text style={styles.pointsPlayerO}>{score.O}</Text>
        </View>
      </View>
      <View style={styles.player}>
        <Circle />
        {currentPlayer === Players.O ? (
          <Text style={styles.turnFlag}>YOUR TURN</Text>
        ) : null}
      </View>
    </View>
  );
};

export default GameState;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#121112",
    borderBottomColor: "#FC4D3C",
    borderWidth: 1,
  },
  player: {
    flex: 1,
    height: "80%",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  turnFlag: {
    fontWeight: '700',
    color: "#FC4D3C",
    paddingTop: 20
  },
  scoreState: {
    display: "flex",
    flex: 1,
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  score: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scoreText: {
    fontSize: 30,
    color: "#e3e1e5",
  },
  points: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  pointsPlayerX: {
    color: "#e3e1e5",
    fontSize: 40,
  },
  pointsPlayerO: {
    color: "#e3e1e5",
    fontSize: 40,
  },
  pointsVerticalLine: {
    height: "50%",
    width: "0%",
    borderLeftColor: "#e3e1e5",
    borderLeftWidth: 2,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderTopWidth: 0,
  },
});
