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

const MenuScreen = ({ navigation }: any) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.text}>CHOOSE YOUR GRID SIZE</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text: string) => {
            console.log(text)
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
              navigation.navigate("Game");
            }}
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
