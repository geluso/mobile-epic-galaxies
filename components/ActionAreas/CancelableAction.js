import { styles } from '../../assets/styles';
import { View, Text, Button } from 'react-native';
import EmptyBreak from '../EmptyBreak';

export default function CancelableAction({game, text, cancel}) {
  console.log('send ship action')
  return (
    <View style={styles.container}>
      <EmptyBreak />
      <Text style={styles.whiteText}>{text}</Text>
      <EmptyBreak />
      <Text style={styles.redText}>{game.error}</Text>
      <EmptyBreak />
      <Button title="Cancel" onPress={() => cancel()} />
    </View>
  );
}
