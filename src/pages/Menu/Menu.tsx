import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  GameMode,
  selectGridSize,
  setGameMode,
  setGrid,
  setGridSize,
} from "../../features/gameSlice";
import Grid from "../../models/Grid";

const MenuScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const gridSize: number = useSelector(selectGridSize);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.text}>CHOOSE YOUR GRID SIZE</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text: string) => {
            if (Number(text)) {
              const customGridSize = Number(text);
              dispatch(setGridSize(customGridSize));
            } else {
              dispatch(setGridSize(3));
            }
          }}
          keyboardType="numeric"
          maxLength={1}
          placeholder="max. 9"
          onBlur={Keyboard.dismiss}
        />
        <Text style={styles.text}>WHICH MODE YOU WANNA PLAY?</Text>
        <View style={styles.modeButtonContainer}>
          <TouchableOpacity
            style={styles.modeButton}
            onPress={() => {
              dispatch(setGrid(new Grid(gridSize, gridSize)));
              dispatch(setGameMode(GameMode.MULTI));
              navigation.navigate("Game");
            }}
            disabled={gridSize === 0}
          >
            <Text style={styles.modeButtonText}>MULTIPLAYER</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#121112",
  },
  modeButtonContainer: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  modeButton: {
    width: "100%",
    backgroundColor: "#e3e1e5",
    padding: 20,
    margin: 5,
    borderRadius: 10,
  },
  modeButtonText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FC4D3C",
    margin: 5,
  },
  textInput: {
    margin: 5,
    padding: 5,
    marginBottom: 20,
    textAlign: "center",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
  },
});
