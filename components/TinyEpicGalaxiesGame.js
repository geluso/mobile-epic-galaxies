import { styles } from '../assets/styles';
import { View, Text } from 'react-native';

import PlayerMat from './PlayerMat';
import PlanetCard from './PlanetCard';
import EmptyBreak from './EmptyBreak';

import { useState } from 'react';
import DiceActions from './DiceActions';

import { GameState } from '../models/GameState';
import CancelableAction from './ActionAreas/CancelableAction';

export default function TinyEpicGalaxiesGame({game}) {
  const [state, setState] = useState(game.toJSON());

  console.log('game state:', game.state);

  const wrapUpdate = func => {
    func();
    setState(game.toJSON());
  }

  const cancel = () => wrapUpdate(() => {
    game.state = GameState.ChooseDiceActions;
  });

  const renderActionArea = () => {
    if (game.state === GameState.ChooseDiceActions) {
      return <DiceActions wrapUpdate={wrapUpdate} game={game} />
    } else if (game.state === GameState.SendShip) {
      return <CancelableAction text="Pick ship destination" cancel={cancel} />
    } else if (game.state === GameState.ChooseColony) {
      return <CancelableAction text="Pick colony power" cancel={cancel} />
    } else if (game.state === GameState.AdvanceDiplomacy) {
      return <CancelableAction text="Pick planet to progress" cancel={cancel} />
    } else if (game.state === GameState.AdvanceEconomy) {
      return <CancelableAction text="Pick planet to progress" cancel={cancel} />
    }
  }

  return (
    <View style={styles.container}>
      <EmptyBreak />

      <View style={styles.planetMat}>
        {state.currentPlanets.map((planet, i) => <PlanetCard key={i} game={game} planet={planet} />)}
      </View>

      <View style={styles.playerMatContainer}>
        {state.players.map((player, i) => <PlayerMat key={i} player={player} />)}
      </View>

      <EmptyBreak />

      {renderActionArea()}
    </View>
  );
}
