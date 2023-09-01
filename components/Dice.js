import { styles } from '../assets/styles';
import { Text, TouchableNativeFeedback, View } from 'react-native';

export default function Dice({action, clickHandler}) {
    const handlePress = () => {
        console.log('pressed');
        clickHandler && clickHandler();
    }
    const noop = () => {};
    return (
        <TouchableNativeFeedback onPress={handlePress}>
            <View style={styles.die}>
                <Text style={styles.dieText}>{action}</Text>
            </View>
        </TouchableNativeFeedback>
    );
}
