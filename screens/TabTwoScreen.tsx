import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { selectCount } from '../store/counterSlice';

export default function TabTwoScreen() {
  const count = useSelector(selectCount)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>VALUE : {count} </Text>

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
