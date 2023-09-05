import { colorsToStyle, styles } from '../assets/styles';
import { Text, View, TouchableNativeFeedback } from 'react-native';
import { GameState } from '../models/GameState';

export default function PlayerMat({game, player, update}) {
  const handlePress = () => {
    console.log('pressed home galaxy');
    if (game.state === GameState.SendShipOrigin) {
        game.shipDepartHomeGalaxy();
        update();
    } else if (game.state === GameState.SendShipDestination) {
        game.shipEnterHomeGalaxy();
        update();
    }
  };

  const color = colorsToStyle(player.color);
  return (
    <TouchableNativeFeedback onPress={handlePress}>
      <View style={styles.playerMat}>
          <Text style={color}>{player.energy}% {player.culture}#</Text>
          <Text style={color}>{player.level.number}: {player.level.dice}d {player.level.ships}s</Text>
      </View>
    </TouchableNativeFeedback>
  )
}
