import { GameState } from "../GameState";
import { MAX_LEVEL } from "../Levels";

export default class HomeColony {
    constructor() {
        this.name = 'Home Galaxy';
        this.text = 'Upgrade your empire; spend only % or #';
        this.points = 0;
    }

    toJSON() {
        return {
            name: this.name,
            text: this.text,
        }
    }

    utilize(game) {
        const player = game.currentPlayer();
        if (player.level.number === MAX_LEVEL) {
            game.setError('You are already at the maximum level.');
            return; 
        }

        const energy = player.energy;
        const culture = player.culture;
        const needed = player.level.number + 1;
        if (energy < needed && culture < needed) {
            game.setError('Not enough % or # to upgrade your empire.');
            return; 
        }

        // TODO: allow player to select which resource to use to pay for empire upgrade
        // if (energy >= needed && culture >= needed) {
        //     game.setState('Upgrade with % or #?');
        //     return; 
        // }


        player.energy -= needed;
        player.levelUp();

        game.setState(GameState.ChooseDiceActions);
    }
}