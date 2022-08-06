import { Image, StyleSheet } from "react-native";

const Cross = () => <Image style={styles.cross} source={require("../../../../assets/cross.png")}/>;

const styles = StyleSheet.create({
  cross: {
    display: "flex",
    width: '95%',
    height: '95%',
    backgroundColor: 'transparent',
    overlayColor: '#FFFF'
  },
});

export default Cross;
