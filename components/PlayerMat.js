import { colorsToStyle, styles } from '../assets/styles';
import { Text, View } from 'react-native';

export default function PlayerMat({player}) {
  const color = colorsToStyle[player.color];
  return (
    <View style={styles.playerMat}>
        <Text style={color}>{player.energy} %</Text>
        <Text style={color}>{player.culture} #</Text>
        <Text style={color}></Text>
        <Text style={color}>{player.level.dice} dice</Text>
        <Text style={color}>{player.level.ships} ships</Text>
        <Text style={color}></Text>
        <Text style={color}>Level {player.level.number}</Text>
    </View>
  )
}
