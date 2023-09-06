import { styles } from '../../assets/styles';
import { View, Text, Button } from 'react-native';

export default function AcknowledgePrompt({text, cancel}) {
  console.log('acknowledge prompt:', text)
  return (
    <View style={styles.container}>
      <Text style={styles.whiteText}>{text}</Text>
      <Button title="OK" onPress={() => cancel()} />
    </View>
  );
}
