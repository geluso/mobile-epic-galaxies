import { styles } from '../../assets/styles';
import { View, Text, Button } from 'react-native';

export default CancelableAction = ({text, cancel}) => {
  console.log('send ship action')
  return (
    <View style={styles.container}>
      <Text style={styles.whiteText}>{text}</Text>
      <Button title="Cancel" onPress={() => cancel()} />
    </View>
  );
}
