import { StyleSheet, Text, View, ImageBackground } from "react-native";
import bg from "./images/BG.jpg";

import LoginScreen from "./Screens/LoginScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.image}>
        <LoginScreen />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
});
