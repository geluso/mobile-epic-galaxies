import { styles } from '../../assets/styles';
import { View, Text, Button } from 'react-native';

export default function CancelableAction({game, text, cancel}) {
  console.log('send ship action')
  return (
    <View style={styles.container}>
      <Text style={styles.whiteText}>{text}</Text>
      <Text style={styles.redText}>{game.error}</Text>
      <Button title="Cancel" onPress={() => cancel()} />
    </View>
  );
}
