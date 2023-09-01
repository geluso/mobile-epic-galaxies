import { styles } from '../assets/styles';
import { Text, View } from 'react-native';
import { ProgressTypes, ResourceTypes } from '../models/Planet';

export default function PlanetCard({planet, players}) {
    console.log('planet card got planet:', planet)

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

    return (
        <View style={styles.planet}>
            <View style={styles.planetTitle}>
            <Text style={styles.planetName}>{planet.name}</Text>
            <Text style={styles.planetType}>{renderResourceType()}</Text>
            </View>
            <Text style={styles.whiteText}>{renderProgressType()}</Text>
            <Text></Text>
            <Text style={styles.redPlayer}>{renderProgressSpaces()}</Text>
            <Text style={styles.greenPlayer}>{renderProgressSpaces()}</Text>
            <Text style={styles.bluePlayer}>{renderProgressSpaces()}</Text>
            <Text style={styles.blackPlayer}>{renderProgressSpaces()}</Text>
            <Text style={styles.yellowPlayer}>{renderProgressSpaces()}</Text>
            <Text></Text>
            <Text style={styles.whiteText}>{planet.text}</Text>
            <Text style={styles.whiteTextRight}>{planet.points}</Text>
        </View>
    )
}
