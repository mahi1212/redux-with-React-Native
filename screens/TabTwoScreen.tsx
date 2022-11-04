import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { Text, View } from '../components/Themed';
import { selectCount } from '../store/counterSlice';
import { selectTheme } from '../store/themeSlice';

export default function TabTwoScreen() {
  const count = useSelector(selectCount)
  const mode = useSelector(selectTheme)
  const bgColor = mode === "light" ? "white" : "black"
  const color = mode === "light" ? "black" : "white"
  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>
      <Text style={[styles.title, {color:color}]}>VALUE : {count} </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
