import { Pressable, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { Text, View } from "../components/Themed";
import { decrement, increment, selectCount } from "../store/counterSlice";
import { selectTheme, toggleTheme } from "../store/themeSlice";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const mode = useSelector(selectTheme);
  const bgColor = mode == "light" ? "white" : "black";
  const textColor = mode == "light" ? "black" : "white";

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={[styles.title, { color: textColor }]}>
        Count Value : {count}
      </Text>

      <View style={[styles.buttons, { backgroundColor: bgColor }]}>
        <Pressable
          style={styles.signleButton}
          onPress={() => {
            dispatch(decrement());
          }}
        >
          <Text style={{ color: textColor }}>Decrement</Text>
        </Pressable>
        <Pressable
          style={styles.signleButton}
          onPress={() => dispatch(increment())}
        >
          <Text style={{ color: textColor }}>Increment</Text>
        </Pressable>
      </View>

      {/* theme changing code */}
      <View style={[styles.buttons, { backgroundColor: bgColor }]}>
        <Pressable
          style={styles.signleButton2}
          onPress={() => dispatch(toggleTheme("dark"))}
        >
          <Text style={{ color: textColor }}>Dark Theme</Text>
        </Pressable>
        <Pressable
          style={[styles.signleButton2]}
          onPress={() => dispatch(toggleTheme("light"))}
        >
          <Text style={{ color: textColor }}>Light Theme</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttons: {
    flexDirection: "row",
  },
  signleButton: {
    backgroundColor: "lightgray",
    padding: 20,
    margin: 10,
  },
  signleButton2: {
    backgroundColor: "lightgreen",
    padding: 16,
    margin: 10,
  },
});
