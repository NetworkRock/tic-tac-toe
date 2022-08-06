import React, { useState } from "react";
import { StyleSheet, View, TouchableHighlight, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  rematch,
  selectCurrentPlayer,
  selectField,
  selectGrid,
  setCurrentPlayer,
  setFieldTouched,
  setScore,
} from "../../features/gameSlice";
import Field from "../../models/Field";
import Grid from "../../models/Grid";
import Players from "../../models/Players";
import { RootState } from "../../store";
import Circle from "./GameShapes/Circle";
import Cross from "./GameShapes/Cross";
import { resetState } from "../../features/gameSlice";
import { useNavigation } from "@react-navigation/native";

interface GameFieldProps {
  id: number;
  rowId: number;
}

const GameField = ({ id, rowId }: GameFieldProps) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const currentPlayer: Players = useSelector(selectCurrentPlayer);
  const currentGrid: Grid = useSelector(selectGrid);
  const currentField: Field = useSelector((state: RootState) =>
    selectField(state, rowId, id)
  );

  const [shape, setShape] = useState<JSX.Element | null>();
  const drawShape = (): JSX.Element =>
    currentPlayer === Players.X ? <Cross /> : <Circle />;

  enum gameOverCategory {
    TIE = 'TIE',
    WON = 'WON',
  }

  const gameOver = (category: gameOverCategory) => {
    const message = category === gameOverCategory.TIE ? '' : 'has won the game!'
    return Alert.alert(category === gameOverCategory.WON ? currentPlayer : 'TIE', message, [
      {
        text: "GO TO MENU",
        onPress: () => {
          dispatch(resetState());
          navigation.goBack();
        },
      },
      {
        text: "REMATCH!",
        onPress: () => dispatch(rematch()),
        style: "cancel",
      },
      {
        text: "RESET SCORE",
        onPress: () => dispatch(resetState()),
        style: "destructive",
      },
    ]);
  };

  const move = () => {
    if (currentField.touched === undefined) {
      dispatch(setFieldTouched({ rowId, fieldId: id }));
      setShape(drawShape());
      dispatch(
        setCurrentPlayer(currentPlayer === Players.X ? Players.O : Players.X)
      );
    }
    if (currentGrid.checkWinning(currentGrid.rows, rowId, id)) {
      gameOver(gameOverCategory.WON);
      dispatch(setScore(currentPlayer))
    } else if (currentGrid.allFieldsTouched(currentGrid.rows)) {
      gameOver(gameOverCategory.TIE);
    }
  };

  return (
    <TouchableHighlight style={styles.field} onPress={move}>
      <View style={styles.fieldContainer}>
        {currentField.touched ? shape : null}
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
