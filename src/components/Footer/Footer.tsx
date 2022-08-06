import React from "react";
import { StyleSheet, View} from "react-native";

const ActionButtons = () => {
  return (
    <View style={styles.actionButtonsContainer}>
      <View style={styles.actionButtons}>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  actionButtonsContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#121112",
  },
  actionButtons: {
    flex: 1,
    flexDirection: "row",
  },
});

export default ActionButtons;
