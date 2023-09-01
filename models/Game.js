import { ALL_PLANETS } from '../models/AllPlanets';
import { Player } from '../models/Player';

export class Game {
    constructor() {
        const playerColors = ['red', 'blue', 'green', 'black', 'yellow'];
        this.players = playerColors.map(color => new Player(color));

        this.planetDeck = [...ALL_PLANETS];
        this.currentPlanets = [];
        for (let i = 0; i < 4; i++) {
            let index = Math.floor(Math.random() * this.planetDeck.length);
            let planet = this.planetDeck.splice(index, 1)[0];
            console.log('picked planet', planet);
            this.currentPlanets.push(planet);
        }
    }

    toJSON() {
        return {
            players: this.players.map(player => player.toJSON()),
            currentPlanets: this.currentPlanets.map(planet => planet.toJSON()),
        }
    }

    currentPlayer() {
        return this.players[0];
    }

    acquireEnergy() {
        console.log('acquire energy')
        this.players[0].energy++;
    }

    acquireCulture() {
        console.log('acquire culture')
        this.players[0].culture++;
    }

    moveShip() {
        console.log('move ship');
    }

    colony() {
        console.log('colony');
        this.currentPlayer().levelUp();
    }

    advanceDiplomacy() {
        console.log('advance diplomacy');
    }

    advanceEconomy() {
        console.log('advance economy');
    }
}