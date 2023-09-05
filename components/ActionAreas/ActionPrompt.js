import { styles } from '../../assets/styles';
import { View, Button } from 'react-native';

export default function ActionPrompt({game, update, text}) {
  const rollDice = () => {
    game.rollDice();
    update();
  }

  return (
    <View style={styles.container}>
      <Button style={styles.whiteText} title={text} onPress={rollDice} />
    </View>
  );
}
