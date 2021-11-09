// import { StatusBar } from "expo-status-bar";
// import React, { useState, useEffect } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   Image,
//   TouchableOpacity,
//   Button,
//   Alert,
//   TextInput,
//   Switch,
//   Keyboard,
//   TouchableWithoutFeedbackBase,
// } from "react-native";
// import axios from "axios";
// import styles from "./app/styles/styleSheet";
// //import font from "./assets/fonts/some.tft"
// export default function App() {
//   const [text, setText] = useState("");
//   const [users, setUsers] = useState([]);
//   const [keyboardStatus, setKeyboardStatus] = useState(undefined);

//   const [isEnabled, setIsEnabled] = useState(false);
//   const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

//   const doSomethings = () => {
//     // somethings
//     console.log("Cool");
//   };

//   // useEffect(() => {
//   //   axios
//   //     .get("http://localhost:5000/users")
//   //     .then((res) => setUsers(res.data))
//   //     .catch((err) => console.log(err));
//   // });
//   // useEffect(() => {
//   //   axios
//   //     .post("http://localhost:5000/users",data,{})
//   //     .then((res) => setUsers(res.data))
//   //     .catch((err) => console.log(err));
//   // });
//   useEffect(() => {
//     const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
//       setKeyboardStatus("Keyboard Shown");
//     });
//     const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
//       setKeyboardStatus("Keyboard Hidden");
//     });

//     return () => {
//       showSubscription.remove();
//       hideSubscription.remove();
//     };
//   }, []);

//   return (
//     <SafeAreaView style={styles.container}>
//       <Image
//         source={require("./app/assets/F740BFC0-46E4-4092-8E99-92B52C3A250C_1_105_c.jpeg")}
//         // source={{ uri: "https://" }}
//         style={{
//           width: 200,
//           height: 200,
//           borderRadius: 100,
//         }}
//       />
//       <Text numberOfLines={8} onPress={doSomethings} style={styles.text}>
//         Open up App.js to start working on your app! Open up App.js to start
//         {"\n"}
//         working on your app! Open up App.js to start working on your app! Open
//         {"\n"}
//         up App.js to start working on your app! Open up App.js to start working
//         {"\n"}
//       </Text>
//       <TouchableOpacity
//         onPress={() => console.log("I am img")}
//       ></TouchableOpacity>
//       <Button
//         title="Press here"
//         // onPress={() => console.log("Nice, I am button")}
//         onPress={() =>
//           Alert.alert("Your info", "Are you sure?", [
//             {
//               text: "Ok",
//               onPress: () => console.log("Cool, you are the best"),
//             },
//             { text: "Not okay", onPress: () => console.log("Ok, no problem") },
//             { text: "Cool", onPress: () => console.log("Cool") },
//           ])
//         }
//       />
//       <Text>{keyboardStatus}</Text>
//       <TextInput
//         style={{ height: 20 }}
//         placeholder="Enter your name"
//         onChangeText={(text) => setText(text)}
//         defaultValue={text}
//         onSubmitEditing={Keyboard.dismiss}
//       />
//       {console.log(text)}
//       <Switch
//         // false not for ios
//         trackColor={{ false: "yellow", true: "gray" }}
//         thumbColor={isEnabled ? "black" : "red"}
//         ios_backgroundColor="#3e3e3e"
//         onValueChange={toggleSwitch}
//         value={isEnabled}
//         ios_backgroundColor="orange"
//       />
//       <StatusBar style="auto" />
//     </SafeAreaView>
//   );
// }

// import React from "react";
// import {
//   Button,
//   Platform,
//   Text,
//   Vibration,
//   View,
//   SafeAreaView,
//   StyleSheet,
// } from "react-native";

// const Separator = () => {
//   return <View style={Platform.OS === "android" ? styles.separator : null} />;
// };

// const App = () => {
//   const ONE_SECOND_IN_MS = 1000;

//   const PATTERN = [
//     1 * ONE_SECOND_IN_MS,
//     2 * ONE_SECOND_IN_MS,
//     3 * ONE_SECOND_IN_MS,
//   ];

//   const PATTERN_DESC =
//     Platform.OS === "android"
//       ? "wait 1s, vibrate 2s, wait 3s"
//       : "wait 1s, vibrate, wait 2s, vibrate, wait 3s";

//   return (
//     <SafeAreaView style={(styles.container, { backgroundColor: "blue" })}>
//       <Text style={[styles.header, styles.paragraph]}>Vibration API</Text>
//       <View>
//         <Button title="Vibrate once" onPress={() => Vibration.vibrate()} />
//       </View>
//       <Separator />
//       {Platform.OS == "android"
//         ? [
//             <View>
//               <Button
//                 title="Vibrate for 10 seconds"
//                 onPress={() => Vibration.vibrate(10 * ONE_SECOND_IN_MS)}
//               />
//             </View>,
//             <Separator />,
//           ]
//         : null}
//       <Text style={styles.paragraph}>Pattern: {PATTERN_DESC}</Text>
//       <Button
//         title="Vibrate with pattern"
//         onPress={() => Vibration.vibrate(PATTERN)}
//       />
//       <Separator />
//       <Button
//         title="Vibrate with pattern until cancelled"
//         onPress={() => Vibration.vibrate(PATTERN, true)}
//       />
//       <Separator />
//       <Button
//         title="Stop vibration pattern"
//         onPress={() => Vibration.cancel()}
//         color="#FF0000"
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     paddingTop: 44,
//     padding: 8,
//   },
//   header: {
//     fontSize: 18,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   paragraph: {
//     margin: 24,
//     textAlign: "center",
//   },

//   separator: {
//     marginVertical: 8,
//     borderBottomColor: "#737373",
//     borderBottomWidth: StyleSheet.hairlineWidth,
//   },
// });

// export default App;

import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
// npm i react
// npm i react-router-native
import { NativeRouter, Route, Link } from "react-router-native";
import Home from "./app/screens/Home";
import About from "./app/screens/About";
import More from "./app/screens/More";

const App = () => (
  <NativeRouter>
    <SafeAreaView style={styles.nav}>
      <Link to="/about" underlayColor="orange" style={styles.navItem}>
        <Text>About</Text>
      </Link>
      <Link to="/more" underlayColor="orange" style={styles.navItem}>
        <Text>More</Text>
      </Link>
    </SafeAreaView>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/more" component={More} />
  </NativeRouter>
);

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    zIndex: 1,
    justifyContent: "space-around",
    backgroundColor: "#4444",
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#4444",
  },
});

export default App;
