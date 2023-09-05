import { styles } from '../assets/styles';
import { View, Text } from 'react-native';

import PlayerMat from './PlayerMat';
import PlanetCard from './PlanetCard';
import EmptyBreak from './EmptyBreak';

import { useState } from 'react';
import DicePool from './DicePool';

import { GameState } from '../models/GameState';
import ActionPrompt from './ActionAreas/ActionPrompt';
import CancelableAction from './ActionAreas/CancelableAction';

export default function TinyEpicGalaxiesGame({game}) {
  const [state, setState] = useState(game.toJSON());

  console.log('game state:', game.state);

  const wrapUpdate = func => {
    func();
    setState(game.toJSON());
  }

  const update = () => {
    setState(game.toJSON());
  }

  const cancel = () => wrapUpdate(() => {
    game.setState(GameState.ChooseDiceActions);
  });

  const renderActionArea = () => {
    if (game.state === GameState.InitiateRoll) {
      return <ActionPrompt game={game} update={update} text="Roll dice" />
    } else if (game.state === GameState.ChooseDiceActions) {
      return <DicePool wrapUpdate={wrapUpdate} game={game} />
    } else if (game.state === GameState.SendShipOrigin) {
      return <CancelableAction text="Pick ship origin" game={game} cancel={cancel} />
    } else if (game.state === GameState.SendShipDestination) {
      return <CancelableAction text="Pick ship destination" game={game} cancel={cancel} />
    } else if (game.state === GameState.ChooseColony) {
      return <CancelableAction text="Pick colony power" game={game} cancel={cancel} />
    } else if (game.state === GameState.AdvanceDiplomacy) {
      return <CancelableAction text="Pick planet to progress" game={game} cancel={cancel} />
    } else if (game.state === GameState.AdvanceEconomy) {
      return <CancelableAction text="Pick planet to progress" game={game} cancel={cancel} />
    }
  }

  return (
    <View style={styles.container}>
      <EmptyBreak />

      <View style={styles.planetMat}>
        {game.currentPlanets.map((planet, i) => <PlanetCard key={i} game={game} planet={planet} update={update} />)}
      </View>

      <View style={styles.playerMatContainer}>
        {state.players.map((player, i) => <PlayerMat key={i} game={game} player={player} update={update} />)}
      </View>

      <EmptyBreak />

      {renderActionArea()}
    </View>
  );
}
