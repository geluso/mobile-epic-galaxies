import { ALL_PLANETS } from '../models/AllPlanets';
import { Player } from '../models/Player';

import { GameState } from './GameState';

export class Game {
    constructor() {
        this.turn = 0;

        const playerColors = ['red', 'blue', 'green', 'black', 'yellow'];
        this.players = playerColors.map(color => new Player(color));

        this.planetDeck = [...ALL_PLANETS];
        this.currentPlanets = [];
        for (let i = 0; i < 4; i++) {
            let index = Math.floor(Math.random() * this.planetDeck.length);
            let planet = this.planetDeck.splice(index, 1)[0];
            this.currentPlanets.push(planet);
        }

        this.state = GameState.ChooseDiceActions;
    }

    toJSON() {
        return {
            players: this.players.map(player => player.toJSON()),
            currentPlanets: this.currentPlanets.map(planet => planet.toJSON()),
            state: this.state.description,
        }
    }

    currentPlayer() {
        return this.players[this.turn % this.players.length];
    }

    acquireEnergy() {
        console.log('acquire energy')
        const player = this.currentPlayer();
        player.energy++;
        player.energy = Math.min(7, player.energy);
    }

    acquireCulture() {
        console.log('acquire culture')
        const player = this.currentPlayer();
        player.culture++;
        player.culture = Math.min(7, player.culture);
    }

    sendShip() {
        console.log('move ship');
        this.state = GameState.SendShip;
    }

    colony() {
        console.log('colony');
        this.state = GameState.ChooseColony;
    }

    advanceDiplomacy() {
        console.log('advance diplomacy');
        this.state = GameState.AdvanceDiplomacy;
    }

    advanceEconomy() {
        console.log('advance economy');
        this.state = GameState.AdvanceEconomy;
    }
}