import { colorsToStyle, styles } from '../assets/styles';
import { Text, View } from 'react-native';

export default function PlayerMat({player}) {
  const color = colorsToStyle(player.color);
  return (
    <View style={styles.playerMat}>
        <Text style={color}>{player.energy}% {player.culture}#</Text>
        <Text style={color}>{player.level.number}: {player.level.dice}d {player.level.ships}s</Text>
    </View>
  )
}
