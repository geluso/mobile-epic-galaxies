import { styles } from '../assets/styles';
import { Text, TouchableNativeFeedback, View } from 'react-native';

export default function Dice({game, action, clickHandler}) {
    const handlePress = () => {
        console.log('pressed');
        clickHandler && clickHandler();
    }

    const dieColorLookup = {
        red: styles.dieRed,
        blue: styles.dieBlue,
        green: styles.dieGreen,
        black: styles.dieBlack,
        yellow: styles.dieYellow,
    }

    const dieStyle = dieColorLookup[game.currentPlayer().color];

    return (
        <TouchableNativeFeedback onPress={handlePress}>
            <View style={dieStyle}>
                <Text style={styles.dieText}>{action}</Text>
            </View>
        </TouchableNativeFeedback>
    );
}
