import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert,
  TextInput,
} from "react-native";
import colors from "./config/colors";

export default function App() {
  const [text, setText] = useState("");
  // SafeAreaView
  console.log(text);
  console.log(require("./assets/sky.jpeg"));
  const doSomething = () => {
    console.log("Hey I am fun");
  };
  return (
    <View style={styles.container}>
      <Text>Hey, I have done React Native app</Text>
      <Text style={styles.main}>Hey, I have done React Native app</Text>
      <TouchableHighlight
        onPress={() => console.log("Cool")}
        onLongPress={() => console.log("YAY")}
      >
        <Image
          source={require("./assets/sky.jpeg")}
          style={{
            width: 200,
            height: 200,
            borderRadius: 100,
          }}
        />
      </TouchableHighlight>
      {
        //<Image source={{ uri: "https://reactjs.org/logo-og.png" }} />
      }
      {
        //  onPress={() => alert("Are you shore?")}
      }
      <Button title="Click me" color="gray" onPress={doSomething} />
      <Button
        title="Ask me"
        color="red"
        onPress={() =>
          Alert.alert("Sell your data", "Do you agree?", [
            {
              text: "OK",
              onPress: () => console.log("Cool I have them now for everyone"),
            },
            { text: "Noo", onPress: () => console.log("Oh mist") },
          ])
        }
      />
      <TextInput
        style={{ height: 40 }}
        placeholder="Type here to translate!"
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.75,
    backgroundColor: colors.main,
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    backgroundColor: colors.bg,
  },
});
