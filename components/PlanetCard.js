import { colorsToStyle, styles } from '../assets/styles';
import { Text, View, Button, TouchableNativeFeedback } from 'react-native';
import { ProgressTypes, ResourceTypes } from '../models/Planet';
import { GameState } from '../models/GameState';

export default function PlanetCard({game, planet, update}) {
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

    const renderProgressSpaces = (player) => {
        const hasShipInPosition = (index) => {
            for (let i = 0; i < planet.orbitingShips.length; i++) {
                const shipPosition = planet.orbitingShips[i];
                if (shipPosition.index === index && shipPosition.player.color === player.color) {
                    return true;
                }
            }
            return false;
        }

        let spaces = '';
        for (let i = 0; i < planet.spaces; i++) {
            if (hasShipInPosition(i)) {
                spaces += 'S ';
            } else {
                spaces += '_ ';
            }
        }
        return 'orbit [ ' + spaces + ']';
    }

    const renderLandedShips = (player) => {
        let count = 0;
        planet.landedShips.forEach(ship => {
            if (ship.player.color === player.color) {
                count++;
            }
        });
        return count + ' landed';
    }

    const handleOrbit = () => {
        console.log('action orbit', planet.name);
        game.orbit(planet);
        update();
    }

    const handleLand = () => {
        console.log('action land', planet.name);
        game.land(planet);
        update();
    }

    const renderActionArea = () => {
        if (game.state === GameState.SendShipDestination || game.state === GameState.SendShipOrigin) {
            return (
                <View>
                    <View style={styles.planetButtonContainer}>
                        <Button color="gray" title="orbit" onPress={() => handleOrbit(planet)} />
                    </View>
                    <View style={styles.planetButtonContainer}>
                        <Button color="gray" title="land" onPress={() => handleLand(planet)} />
                    </View>
                </View>
            )
        } else {
            return (
                <View>
                    {game.players.map((player, i) => {
                        const style = colorsToStyle(player.color);
                        return <Text key={i} style={style}>{renderLandedShips(player)}</Text>
                    })}
                </View>
            )
        }
    }

    const handlePress = () => {
        console.log('pressed planet card:', planet.name);
        if (game.state === GameState.AdvanceDiplomacy) {
            game.advanceDiplomacyForPlanet(planet);
            update();
        } else if (game.state === GameState.AdvanceEconomy) {
            game.advanceEconomyForPlanet(planet);
            update();
        }
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
                        {game.players.map((player, i) => {
                            const style = colorsToStyle(player.color);
                            return <Text key={i} style={style}>{renderProgressSpaces(player)}</Text>
                        })}
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
