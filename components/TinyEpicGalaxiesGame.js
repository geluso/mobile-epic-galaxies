import { styles } from '../assets/styles';
import { View } from 'react-native';

import PlayerMat from './PlayerMat';
import PlanetCard from './PlanetCard';
import EmptyBreak from './EmptyBreak';

import Dice from './Dice';
import { Game } from '../models/Game';

export default function TinyEpicGalaxiesGame() {
  const game = new Game();
  const currentPlayer = game.players[0];

  const handleGetEnergy = () => {
    console.log('pressed get energy');
    game.acquireEnergy(currentPlayer);
  }

  const handleGetCulture = () => {
    console.log('pressed get culture');
    game.acquireCulture(currentPlayer);
  }

  return (
    <View style={styles.container}>
      <EmptyBreak />

      <View style={styles.planetMat}>
        {game.currentPlanets.map((planet, i) => <PlanetCard key={i} planet={planet} />)}
      </View>

      <View style={styles.playerMatContainer}>
        {game.players.map((player, i) => <PlayerMat key={i} player={player} />)}
      </View>

      <EmptyBreak />

      <View style={styles.rolledDiceContainer}>
        <Dice action="GET %" clickHandler={handleGetEnergy} />
        <Dice action="GET #" clickHandler={handleGetCulture} />
        <Dice action="SHIP" />
        <Dice action="COLONY" />
        <Dice action="DIP" />
        <Dice action="ECO" />
      </View>
    </View>
  );
}
