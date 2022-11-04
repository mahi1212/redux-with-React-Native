import { Pressable, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { decrement, increment } from '../store/counterSlice';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const dispatch = useDispatch()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.buttons}>
        <Pressable style={styles.signleButton} onPress = {()=> dispatch(increment())}>
          <Text>Increment</Text>
        </Pressable>
        <Pressable style={styles.signleButton} onPress={() => {dispatch(decrement())}}>
          <Text>Decrement</Text>
        </Pressable>
      </View>
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  buttons:{
    flexDirection: 'row',
    // flexFlow : 1
    
  },
  signleButton :{
    backgroundColor: 'purple',
    padding: 20,
    margin: 10
  }
});
