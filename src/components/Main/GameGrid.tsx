import React, { Key } from "react";
import { StyleSheet, View } from "react-native";
import Field from "../../models/Field";
import Grid from "../../models/Grid";
import Row from "../../models/Row";
import GameField from "./GameField";

const GameGrid = () => {
  const grid = new Grid(3, 3)
  const drawedGrid = Object.values(grid.rows).map((row: Row, rowIndex: number) => (
    <View style={styles.gridRow} key={rowIndex as Key}>
      {Object.values(row.fields).map((field: Field, index: number) => (
        <GameField
          key={index as Key}
          id={index}
          rowId={rowIndex}
        />
      ))}
    </View>
  ));
  return <>{drawedGrid}</>;
};

export default GameGrid;

const styles = StyleSheet.create({
  gridRow: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
