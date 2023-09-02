import { ALL_PLANETS } from '../models/AllPlanets';
import { Player } from '../models/Player';

import { GameState } from './GameState';
import { ProgressTypes } from './Planet';

export class Game {
    constructor() {
        this.turn = 0;

        const playerColors = ['red', 'blue', 'green', 'black', 'yellow'];
        this.players = playerColors.map(color => new Player(color));

        this.planetDeck = [...ALL_PLANETS];
        this.currentPlanets = [];
        for (let i = 0; i < 4; i++) {
            let planet = this.drawPlanet();
            this.currentPlanets.push(planet);
        }

        this.state = GameState.ChooseDiceActions;
        this.error = 'test';
    }

    toJSON() {
        return {
            players: this.players.map(player => player.toJSON()),
            currentPlanets: this.currentPlanets.map(planet => planet.toJSON()),
            state: this.state.description,
        }
    }

    setState(state) {
        this.state = state;
        this.error = false;
    }

    setStateWithError(state, error) {
        this.state = state;
        this.error = error;
    }

    currentPlayer() {
        return this.players[this.turn % this.players.length];
    }

    drawPlanet() {
        let index = Math.floor(Math.random() * this.planetDeck.length);
        let planet = this.planetDeck.splice(index, 1)[0];
        return planet;
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
        this.setState(GameState.SendShip);
    }

    colony() {
        console.log('colony');
        this.setState(GameState.ChooseColony);
    }

    advanceDiplomacy() {
        console.log('advance diplomacy');
        this.setState(GameState.AdvanceDiplomacy);
    }

    advanceEconomy() {
        console.log('advance economy');
        this.setState(GameState.AdvanceEconomy);
    }

    advanceDiplomacyForPlanet(planet) {
        if (planet.progressType !== ProgressTypes.DIPLOMACY) {
            const errorMessage = planet.name + ' does does not progress ships via diplomacy.';
            console.log(errorMessage);
            this.error = errorMessage;
            return;
        }
        this.agnosticAdvance(planet);
    }

    advanceEconomyForPlanet(planet) {
        if (planet.progressType !== ProgressTypes.ECONOMY) {
            const errorMessage = planet.name + ' does does not progress ships via economy.';
            console.log(errorMessage);
            this.error = errorMessage;
            return;
        }
        this.agnosticAdvance(planet);
    }

    agnosticAdvance(planet) {
        const player = this.currentPlayer();
        planet.orbitingShips.forEach(ship => {
            if (ship.player.color === player.color) {
                ship.index++;
                if (ship.index === planet.spaces - 1) {
                    // add the planet to the players colonies.
                    player.colonies.push(planet);

                    // replace this planet with a new planet card.
                    const newPlanet = this.drawPlanet();
                    this.currentPlanets = this.currentPlanets.map(planetOnTable => {
                        if (planetOnTable.name !== planet.name) {
                            return planetOnTable;
                        } else {
                            return newPlanet;
                        }
                    })

                    // TODO: send all ships back home.
                    planet.orbitingShips.forEach(ship => {

                    });
                }
            }
        })

        this.setState(GameState.ChooseDiceActions);
    }

    orbit(planet) {
        const position = {
            player: this.currentPlayer(),
            index: 0,
        }

        planet.orbitingShips.push(position);
        this.setState(GameState.ChooseDiceActions);
    }

    land(planet) {
        const position = {
            player: this.currentPlayer(),
            index: 0,
        }

        planet.landedShips.push(position);
        this.setState(GameState.ChooseDiceActions);
    }
}