import { Image, StyleSheet } from "react-native";

const Circle = () => <Image style={styles.cricle} source={require("../../../../assets/circle.png")}/>;

const styles = StyleSheet.create({
  cricle: {
    display: "flex",
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    overlayColor: '#FFFF'
  },
});

export default Circle;
