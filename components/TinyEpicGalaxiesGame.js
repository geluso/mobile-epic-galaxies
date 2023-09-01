import { styles } from '../assets/styles';
import { Text, View } from 'react-native';

import { ALL_PLANETS } from '../models/AllPlanets';
import { Player } from '../models/Player';

import PlayerMat from './PlayerMat';
import PlanetCard from './PlanetCard';
import EmptyBreak from './EmptyBreak';

export default function TinyEpicGalaxiesGame() {
  const playerColors = ['red', 'blue', 'green', 'black', 'yellow'];
  const players = playerColors.map(color => new Player(color));


  const planets = ALL_PLANETS;
  const picks = [];
  for (let i = 0; i < 4; i++) {
    let index = Math.floor(Math.random() * planets.length);
    let pick = planets.splice(index, 1)[0];
    console.log('picked planet', pick);
    picks.push(pick);
  }

  return (
    <View style={styles.container}>
      <EmptyBreak />

      <View style={styles.planetMat}>
        {picks.map((planet, i) => <PlanetCard key={i} planet={planet} />)}
      </View>

      <EmptyBreak />

      <View style={styles.playerMatContainer}>
        {players.map((player, i) => <PlayerMat key={i} player={player} />)}
      </View>

      <EmptyBreak />

      <View style={styles.rolledDiceContainer}>
        <View style={styles.die}>
          <Text style={styles.dieText}>GET %</Text>
        </View>
        <View style={styles.die}>
          <Text style={styles.dieText}>GET #</Text>
        </View>
        <View style={styles.die}>
          <Text style={styles.dieText}>SHIP</Text>
        </View>
        <View style={styles.die}>
          <Text style={styles.dieText}>COLONY</Text>
        </View>
        <View style={styles.die}>
          <Text style={styles.dieText}>DIP</Text>
        </View>
        <View style={styles.die}>
          <Text style={styles.dieText}>ECO</Text>
        </View>
      </View>
    </View>
  );
}
