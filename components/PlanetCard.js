import { Button, StyleSheet, Text, View } from 'react-native';
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


  return (
    <View style={styles.planet}>
        <View style={styles.planetTitle}>
        <Text style={styles.planetName}>{planet.name}</Text>
        <Text style={styles.planetType}>{renderResourceType()}</Text>
        </View>
        <Text style={styles.whiteText}>{renderProgressType()}</Text>
        <Text></Text>
        <Text style={styles.redPlayer}>1 [ _ _ _ ]</Text>
        <Text style={styles.greenPlayer}>2 [ _ _ _ ]</Text>
        <Text style={styles.bluePlayer}>3 [ _ _ _ ]</Text>
        <Text style={styles.blackPlayer}>4 [ _ _ _ ]</Text>
        <Text style={styles.yellowPlayer}>5 [ _ _ _ ]</Text>
        <Text></Text>
        <Text style={styles.whiteText}>{planet.text}</Text>
        <Text style={styles.whiteTextRight}>{planet.points}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //borderColor: 'green',
      borderWidth: 2,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
    planetMat: {
      //borderColor: 'red',
      borderWidth: 1,
      width: '100%',
      flexWrap: 'wrap',
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'center',
      marginBottom: 10,
    },
    planet: {
      borderColor: 'yellow',
      borderWidth: 1,
      width: '48%',
      margin: 2,
      padding: 10,
    },
    playerMatContainer: {
      flexDirection: 'row',
      width: '100%',
      //borderColor: 'orange',
      borderWidth: 1,
      alignContent: 'space-between',
      justifyContent: 'space-between',
    },
    playerMat: {
      alignContent: 'center',
      justifyContent: 'center',
      textAlign: 'left',
      borderColor: 'purple',
      borderWidth: 1,
      width: '18%',
      padding: 10,
    },
    whiteText: {
      color: 'white',
    },
    whiteTextRight: {
      color: 'white',
      textAlign: 'right',
    },
    diceContainer: {
      position: 'absolute',
      bottom: 0,
  
      borderColor: 'white',
      borderWidth: 1,
  
      width: '100%',
      flexWrap: 'wrap',
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'center',
    },
    buttonContainer: {
      width: '50%',
    },
    paddedButton: {
      width: '100%',
    },
    header: {
      color: 'white',
      position: 'absolute',
      top: 0,
      fontSize: 20,
      fontWeight: 'bold',
    },
    redPlayer: {
      color: 'red',
    },
    greenPlayer: {
      color: 'green',
    },
    bluePlayer: {
      color: 'cyan',
    },
    yellowPlayer: {
      color: 'yellow',
    },
    blackPlayer: {
      color: 'gray',
    },
    planetTitle: {
      color: 'white',
      flexDirection: 'row',
    },
    planetName: {
      width: '50%',
      color: 'white',
      textAlign: 'left',
    },
    planetType: {
      width: '50%',
      flex: 1,
      color: 'white',
      textAlign: 'right',
    },
    rolledDiceContainer: {
      width: '100%',
      flexWrap: 'wrap',
      flexDirection: 'row',
      alignContent: 'space-between',
      justifyContent: 'space-between',
    },
    die: {
      width: 50,
      height: 50,
      backgroundColor: 'gray',
      color: 'black',
      alignContent: 'center',
      justifyContent: 'center',
      margin: 2,
    },
    dieText: {
      color: 'white',
      textAlign: 'center',
      fontSize: 20,
    }
  });
