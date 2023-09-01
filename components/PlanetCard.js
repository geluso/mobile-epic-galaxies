import { styles } from '../assets/styles';
import { Text, View, Button, TouchableNativeFeedback } from 'react-native';
import { ProgressTypes, ResourceTypes } from '../models/Planet';
import { GameState } from '../models/GameState';

export default function PlanetCard({game, planet, players}) {
    const renderResourceType = () => {
        if (planet.resourceType === ResourceTypes.CULTURE) {
            return '#';
        } else if (planet.resourceType === ResourceTypes.ENERGY) {
            return '/';
        }
    }

    const renderProgressType = () => {
        if (planet.progressType === ProgressTypes.DIPLOMACY) {
            return 'Diplomacy';
        } else if (planet.progressType === ProgressTypes.ECONOMY) {
            return 'Economy';
        }
    }

    const renderProgressSpaces = () => {
        let spaces = '';
        for (let i = 0; i < planet.spaces; i++) {
            spaces += '_ ';
        }
        return '[ ' + spaces + ']';
    }

    const renderLandedShips = (player) => {
        return '1 ship';
    }

    const renderActionArea = () => {
        if (game.state === GameState.SendShip) {
            return (
                <View>
                    <View style={styles.planetButtonContainer}>
                        <Button color="gray" title="orbit" />
                    </View>
                    <View style={styles.planetButtonContainer}>
                        <Button color="gray" title="land" />
                    </View>
                </View>
            )
        } else {
            return (
                <View>
                    <Text style={styles.redPlayer}>{renderLandedShips()}</Text>
                    <Text style={styles.greenPlayer}>{renderLandedShips()}</Text>
                    <Text style={styles.bluePlayer}>{renderLandedShips()}</Text>
                    <Text style={styles.blackPlayer}>{renderLandedShips()}</Text>
                    <Text style={styles.yellowPlayer}>{renderLandedShips()}</Text>
                </View>
            )
        }
    }

    const handlePress = () => {
        console.log('pressed planet card:', planet.name);
    }

    return (
        <TouchableNativeFeedback onPress={handlePress}>
            <View style={styles.planet}>
                <View style={styles.planetTitle}>
                <Text style={styles.planetName}>{planet.name}</Text>
                <Text style={styles.planetType}>{renderResourceType()}</Text>
                </View>
                <Text style={styles.whiteText}>{renderProgressType()}</Text>
                <Text></Text>
                <View style={styles.row}>
                    <View style={styles.col}>
                        <Text style={styles.redPlayer}>{renderProgressSpaces()}</Text>
                        <Text style={styles.greenPlayer}>{renderProgressSpaces()}</Text>
                        <Text style={styles.bluePlayer}>{renderProgressSpaces()}</Text>
                        <Text style={styles.blackPlayer}>{renderProgressSpaces()}</Text>
                        <Text style={styles.yellowPlayer}>{renderProgressSpaces()}</Text>
                    </View>
                    <View style={styles.col}>
                        {renderActionArea()}
                    </View>
                </View>
                <Text></Text>
                <Text style={styles.whiteText}>{planet.text}</Text>
                <Text style={styles.whiteTextRight}>{planet.points}</Text>
            </View>
        </TouchableNativeFeedback>
    )
}
