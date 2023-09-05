import { styles } from '../assets/styles';
import { View } from 'react-native';

import Dice from './Dice';

export default function DiceActions({wrapUpdate, game}) {
    console.log('dice actions')
    return (
        <View style={styles.rolledDiceContainer}>
            <Dice action="GET %" clickHandler={() => wrapUpdate(() => game.acquireEnergy())} />
            <Dice action="GET #" clickHandler={() => wrapUpdate(() => game.acquireCulture())} />
            <Dice action="SHIP" clickHandler={() => wrapUpdate(() => game.sendShipOrigin())} />
            <Dice action="UTE COL" clickHandler={() => wrapUpdate(() => game.colony())} />
            <Dice action="ADV DIP" clickHandler={() => wrapUpdate(() => game.advanceDiplomacy())} />
            <Dice action="ADV ECO" clickHandler={() => wrapUpdate(() => game.advanceEconomy())} />
        </View>
    );
}
