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

    acquireEnergy() {
        console.log('energy initial', this.players[0].energy);
        this.players[0].energy++;
        console.log('energy outitial', this.players[0].energy);
    }

    acquireCulture() {
        this.players[0].culture++;
    }
}