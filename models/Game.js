import { ALL_PLANETS } from '../models/AllPlanets';
import { Player } from '../models/Player';

import { GameState } from './GameState';
import { ProgressTypes, ResourceTypes } from './Planet';

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

    setError(error) {
        console.log('ERROR:', error);
        this.error = error;
    }

    setStateWithError(state, error) {
        this.state = state;
        this.setError(state, error)
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

        let energy = 0;
        this.currentPlanets.forEach(planet => {
            if (planet.resourceType === ResourceTypes.ENERGY) {
                planet.landedShips.forEach(ship => {
                    if (ship.player.color === player.color) {
                        energy++;
                    }
                })
                planet.orbitingShips.forEach(ship => {
                    if (ship.player.color === player.color) {
                        energy++;
                    }
                })
            }
        })

        player.energy += energy;
        player.energy = Math.min(7, player.energy);
    }

    acquireCulture() {
        console.log('acquire culture')
        const player = this.currentPlayer();

        let culture = 0;
        this.currentPlanets.forEach(planet => {
            if (planet.resourceType === ResourceTypes.CULTURE) {
                planet.landedShips.forEach(ship => {
                    if (ship.player.color === player.color) {
                        culture++;
                    }
                })
                planet.orbitingShips.forEach(ship => {
                    if (ship.player.color === player.color) {
                        culture++;
                    }
                })
            }
        })

        player.culture += culture;
        player.culture = Math.min(7, player.culture);
    }

    sendShipOrigin() {
        console.log('move ship');
        this.setState(GameState.SendShipOrigin);
    }

    sendShipDestination() {
        console.log('move ship');
        this.setState(GameState.SendShipDestination);
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
            this.setError(errorMessage);
            return;
        }
        this.agnosticAdvance(planet);
    }

    advanceEconomyForPlanet(planet) {
        if (planet.progressType !== ProgressTypes.ECONOMY) {
            const errorMessage = planet.name + ' does does not progress ships via economy.';
            this.setError(errorMessage);
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
        const player = this.currentPlayer();
        if (this.state === GameState.SendShipOrigin) {
            this.orbitLeave(planet, player);
        } else if (this.state === GameState.SendShipDestination) {
            this.orbitEnter(planet, player);
        }
    }

    orbitEnter(planet, player) {
        const position = {
            player,
            index: 0,
        }

        planet.orbitingShips.push(position);
        this.setState(GameState.ChooseDiceActions);
    }

    orbitLeave(planet, player) {
        let playerShipCount = 0;
        console.log('orbit leave:', planet.orbitingShips);
        planet.orbitingShips = planet.orbitingShips.filter(ship => {
            const isPlayerShip = ship.player.color === player.color;
            if (isPlayerShip) {
                playerShipCount++;
            }
            return !isPlayerShip;
        });
        console.log('orbit leave filtered:', planet.orbitingShips);

        if (playerShipCount > 0) {
            this.setState(GameState.SendShipDestination);
        } else {
            const errorMessage = 'You do not have ships orbiting ' + planet.name;
            this.setError(errorMessage);
        }
    }

    land(planet) {
        const position = {
            player: this.currentPlayer(),
            index: 0,
        }

        planet.landedShips.push(position);
        this.setState(GameState.ChooseDiceActions);
    }

    shipDepartHomeGalaxy() {
        this.setState(GameState.SendShipDestination);
    }

    shipEnterHomeGalaxy() {
        this.setState(GameState.ChooseDiceActions);
    }
}