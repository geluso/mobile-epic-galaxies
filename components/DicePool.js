import { styles } from '../assets/styles';
import { View, Button } from 'react-native';

import Dice from './Dice';
import { DiceActions } from '../models/Die';

export default function DicePool({game, wrapUpdate}) {
    console.log('dice actions')

    const renderDice = (die, index) => {
        let label = "";
        let action = () => {};

        if (die.face === DiceActions.AcquireEnergy) {
            label = 'GET %';
            action = () => game.acquireEnergy();
        } else if (die.face === DiceActions.AcquireCulture) {
            label = 'GET #';
            action = () => game.acquireCulture();
        } else if (die.face === DiceActions.MoveShip) {
            label = 'SHIP';
            action = () => game.sendShipOrigin();
        } else if (die.face === DiceActions.UtilizeColony) {
            label = 'UTE COL';
            action = () => game.colony();
        } else if (die.face === DiceActions.AdvanceDiplomacy) {
            label = 'ADV DIP';
            action = () => game.advanceDiplomacy();
        } else if (die.face === DiceActions.AdvanceEconomy) {
            label = 'ADV ECO';
            action = () => game.advanceEconomy();
        }

        return <Dice key={index} action={label} game={game} clickHandler={() => wrapUpdate(() => action())} />
    };

    return (
        <View>
            <View style={styles.row}>
                {game.dicePool.map((die, index) => {
                    return renderDice(die, index);
                })}
            </View>
            <View style={styles.row}>
                <View style={styles.col}>
                    <Button title="Reroll" onPress={() => wrapUpdate(() => game.rerollAllDice())} />
                </View>
                <View style={styles.col}>
                    <Button title="End turn" onPress={() => wrapUpdate(() => game.endTurn())} />
                </View>
            </View>
        </View>
    );
}
