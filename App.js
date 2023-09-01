import { StyleSheet, View } from 'react-native';
import TinyEpicGalaxiesGame from './components/TinyEpicGalaxiesGame';

import { Game } from './models/Game';

export default function App() {
  const game = new Game();
  return (
    <View style={styles.container}>
      <TinyEpicGalaxiesGame game={game} />
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
