import { colorsToStyle, styles } from '../assets/styles';
import { Text, View } from 'react-native';

export default function PlayerMat({player}) {
  const color = colorsToStyle[player.color];
  return (
    <View style={styles.playerMat}>
        <Text style={color}>{player.energy} %</Text>
        <Text style={color}>{player.culture} #</Text>
        <Text style={color}></Text>
        <Text style={color}>{player.dice} dice</Text>
        <Text style={color}>{player.ships} ships</Text>
        <Text style={color}></Text>
        <Text style={color}>Level {player.level}</Text>
    </View>
  )
}
