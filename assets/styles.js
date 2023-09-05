import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
      borderWidth: 1,
      width: '100%',
      flexWrap: 'wrap',
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'center',
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
      padding: 5,
    },
    playerMatCurrentTurn: {
      alignContent: 'center',
      justifyContent: 'center',
      textAlign: 'left',
      borderColor: 'white',
      borderWidth: 1,
      width: '18%',
      padding: 5,
    },
    whiteText: {
      color: 'white',
    },
    redText: {
      color: 'red',
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
    blackPlayer: {
      color: 'gray',
    },
    yellowPlayer: {
      color: 'orange',
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
    dieRed: {
      width: 50,
      height: 50,
      backgroundColor: 'red',
      color: 'black',
      alignContent: 'center',
      justifyContent: 'center',
      margin: 2,
    },
    dieBlue: {
      width: 50,
      height: 50,
      backgroundColor: 'blue',
      color: 'black',
      alignContent: 'center',
      justifyContent: 'center',
      margin: 2,
    },
    dieGreen: {
      width: 50,
      height: 50,
      backgroundColor: 'green',
      color: 'black',
      alignContent: 'center',
      justifyContent: 'center',
      margin: 2,
    },
    dieBlack: {
      width: 50,
      height: 50,
      backgroundColor: 'gray',
      color: 'black',
      alignContent: 'center',
      justifyContent: 'center',
      margin: 2,
    },
    dieYellow: {
      width: 50,
      height: 50,
      backgroundColor: 'orange',
      color: 'black',
      alignContent: 'center',
      justifyContent: 'center',
      margin: 2,
    },
    dieText: {
      color: 'white',
      textAlign: 'center',
      fontSize: 20,
    },
    row: {
      flexDirection: 'row',
    },
    col: {
      margin: 4,
      alignContent: 'center',
      justifyContent: 'center',
    },
    planetButton: {
      color: 'green',
      backgroundColor: 'gray',
    },
    planetButtonContainer: {
      margin: 2,
    },
  });

  export const colorsToStyle = color => {
    const lookup = {
      'red': styles.redPlayer,
      'green': styles.greenPlayer,
      'blue': styles.bluePlayer,
      'black': styles.blackPlayer,
      'yellow': styles.yellowPlayer,
    };
    return lookup[color];
  }