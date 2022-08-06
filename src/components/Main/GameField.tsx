import React from "react";
import { StyleSheet, View, TouchableHighlight } from "react-native";
import Cross from "./GameShapes/Cross";

interface GameFieldProps {
  id: number;
  rowId: number;
}

const GameField = ({ id, rowId }: GameFieldProps) => {

  const move = () => {
    console.log('MOVE', id, rowId);
  };

  return (
    <TouchableHighlight style={styles.field} onPress={move}>
      <View style={styles.fieldContainer}>
        <Cross />
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  field: {
    flex: 1,
    height: "100%",
    borderWidth: 1,
    borderColor: "#e3e1e5",
    justifyContent: "center",
    alignItems: "center",
  },
  fieldContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  fieldText: {
    color: "#e3e1e5",
    fontSize: 5,
  },
});

export default GameField;
