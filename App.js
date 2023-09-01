import { StyleSheet, View, Button } from 'react-native';
import { useState } from 'react';
import TinyEpicGalaxiesGame from './components/TinyEpicGalaxiesGame';

import { Game } from './models/Game';

export default function App() {
  let game = new Game();
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
