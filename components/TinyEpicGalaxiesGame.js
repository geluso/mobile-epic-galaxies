import { styles } from '../assets/styles';
import { View } from 'react-native';

import PlayerMat from './PlayerMat';
import PlanetCard from './PlanetCard';
import EmptyBreak from './EmptyBreak';

import Dice from './Dice';
import { Game } from '../models/Game';
import { useState } from 'react';

export default function TinyEpicGalaxiesGame({game}) {
  const [state, setState] = useState(game.toJSON());

  const wrapUpdate = func => {
    func();
    setState(game.toJSON());
  }

  return (
    <View style={styles.container}>
      <EmptyBreak />

      <View style={styles.planetMat}>
        {state.currentPlanets.map((planet, i) => <PlanetCard key={i} planet={planet} />)}
      </View>

      <View style={styles.playerMatContainer}>
        {state.players.map((player, i) => <PlayerMat key={i} player={player} />)}
      </View>

      <EmptyBreak />

      <View style={styles.rolledDiceContainer}>
        <Dice action="GET %" clickHandler={() => wrapUpdate(() => game.acquireEnergy())} />
        <Dice action="GET #" clickHandler={() => wrapUpdate(() => game.acquireCulture())} />
        <Dice action="SHIP" clickHandler={() => wrapUpdate(() => game.moveShip())} />
        <Dice action="COLONY" clickHandler={() => wrapUpdate(() => game.colony())} />
        <Dice action="DIP" clickHandler={() => wrapUpdate(() => game.advanceDiplomacy())} />
        <Dice action="ECO" clickHandler={() => wrapUpdate(() => game.advanceEconomy())} />
      </View>
    </View>
  );
}
