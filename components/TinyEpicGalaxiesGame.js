import { Button, StyleSheet, Text, View } from 'react-native';
import PlanetCard from './PlanetCard';
import { ALL_PLANETS } from '../models/AllPlanets';

export default function TinyEpicGalaxiesGame() {
  const planets = ALL_PLANETS;
  const picks = [];
  for (let i = 0; i < 4; i++) {
    let index = Math.floor(Math.random() * planets.length);
    let pick = planets.splice(index, 1)[0];
    console.log('picked planet', pick);
    picks.push(pick);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}></Text>

      <View style={styles.planetMat}>
        <PlanetCard planet={picks[0]} players={[]} />
        <PlanetCard planet={picks[1]} players={[]} />
        <PlanetCard planet={picks[2]} players={[]} />
        <PlanetCard planet={picks[3]} players={[]} />
      </View>

      <View>
        <Text></Text>
      </View>

      <View style={styles.playerMatContainer}>
        <View style={styles.playerMat}>
          <Text style={styles.redPlayer}>2 #</Text>
          <Text style={styles.redPlayer}>1 %</Text>
          <Text style={styles.redPlayer}></Text>
          <Text style={styles.redPlayer}>4 dice</Text>
          <Text style={styles.redPlayer}>2 ships</Text>
          <Text style={styles.redPlayer}></Text>
          <Text style={styles.redPlayer}>Level 1</Text>
        </View>

        <View style={styles.playerMat}>
          <Text style={styles.greenPlayer}>2 #</Text>
          <Text style={styles.greenPlayer}>1 %</Text>
          <Text style={styles.greenPlayer}></Text>
          <Text style={styles.greenPlayer}>4 dice</Text>
          <Text style={styles.greenPlayer}>2 ships</Text>
          <Text style={styles.redPlayer}></Text>
          <Text style={styles.greenPlayer}>Level 1</Text>
        </View>

        <View style={styles.playerMat}>
          <Text style={styles.bluePlayer}>2 #</Text>
          <Text style={styles.bluePlayer}>1 %</Text>
          <Text style={styles.bluePlayer}></Text>
          <Text style={styles.bluePlayer}>4 dice</Text>
          <Text style={styles.bluePlayer}>2 ships</Text>
          <Text style={styles.redPlayer}></Text>
          <Text style={styles.bluePlayer}>Level 1</Text>
        </View>

        <View style={styles.playerMat}>
          <Text style={styles.blackPlayer}>2 #</Text>
          <Text style={styles.blackPlayer}>1 %</Text>
          <Text style={styles.blackPlayer}></Text>
          <Text style={styles.blackPlayer}>4 dice</Text>
          <Text style={styles.blackPlayer}>2 ships</Text>
          <Text style={styles.blackPlayer}></Text>
          <Text style={styles.blackPlayer}>Level 1</Text>
        </View>

        <View style={styles.playerMat}>
          <Text style={styles.yellowPlayer}>2 #</Text>
          <Text style={styles.yellowPlayer}>1 %</Text>
          <Text style={styles.yellowPlayer}></Text>
          <Text style={styles.yellowPlayer}>4 dice</Text>
          <Text style={styles.yellowPlayer}>2 ships</Text>
          <Text style={styles.yellowPlayer}></Text>
          <Text style={styles.yellowPlayer}>Level 1</Text>
        </View>
      </View>

      <View>
        <Text></Text>
      </View>

      <View style={styles.rolledDiceContainer}>
        <View style={styles.die}>
          <Text style={styles.dieText}>GET %</Text>
        </View>
        <View style={styles.die}>
          <Text style={styles.dieText}>GET #</Text>
        </View>
        <View style={styles.die}>
          <Text style={styles.dieText}>SHIP</Text>
        </View>
        <View style={styles.die}>
          <Text style={styles.dieText}>COLONY</Text>
        </View>
        <View style={styles.die}>
          <Text style={styles.dieText}>DIP</Text>
        </View>
        <View style={styles.die}>
          <Text style={styles.dieText}>ECO</Text>
        </View>
      </View>
    </View>
  );
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

