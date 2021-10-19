import React from "react";
import { Text, ImageBackground, StyleSheet } from "react-native";

const Home = () => (
  <ImageBackground
    source={require("../assets/IMG_1904.jpeg")}
    style={styles.background}
  >
    <Text style={styles.mainText}>Hej </Text>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainText: {
    color: "white",
    fontSize: 40,
    fontFamily: "Arial",
    position: "absolute",
    left: 21,
  },
});
export default Home;
