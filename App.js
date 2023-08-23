import { StyleSheet, Text, View } from 'react-native';
import TinyEpicGalaxiesGame from './components/TinyEpicGalaxiesGame';

export default function App() {
  return (
    <View style={styles.container}>
      <TinyEpicGalaxiesGame />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'white',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: 'white'
  }
});
