import { colorsToStyle, styles } from '../assets/styles';
import { Text, View, Button, TouchableNativeFeedback } from 'react-native';
import { GameState } from '../models/GameState';

export default function ColonyPowers({game, update}) {
    const handlePress = planet => {
        planet.utilize(game);
        update();
    }

    return (
        <View>
            {game.currentPlayer().colonies.map((planet, index) => {
                return <TouchableNativeFeedback key={index} onPress={() => handlePress(planet)}>
                    <View style={styles.colonyPower}>
                        <Text style={styles.whiteText}>{planet.name}</Text>
                        <Text style={styles.whiteText}>{planet.text}</Text>
                        <Text style={styles.whiteTextRight}>{planet.points}</Text>
                    </View>
                </TouchableNativeFeedback>
            })}
        </View>
    );
}
