import { ALL_PLANETS } from '../models/AllPlanets';
import { Player } from '../models/Player';

import { Die } from './Die';
import { GameState } from './GameState';
import { ProgressTypes, ResourceTypes } from './Planet';

export class Game {
    constructor() {
        const playerColors = ['red', 'blue', 'green', 'black', 'yellow'];
        this.players = playerColors.map(color => new Player(color));

        this.planetDeck = [...ALL_PLANETS];
        this.currentPlanets = [];
        for (let i = 0; i < 4; i++) {
            let planet = this.drawPlanet();
            this.currentPlanets.push(planet);
        }

        this.state = GameState.InitiateRoll;
        this.error = 'test';

        this.turn = 0;
        this.dicePool = [];
    }

    toJSON() {
        return {
            state: this.state.description,
            players: this.players.map(player => player.toJSON()),
            currentPlanets: this.currentPlanets.map(planet => planet.toJSON()),
            dicePool: this.dicePool,
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

    endTurn() {
        this.turn++;
        this.setState(GameState.InitiateRoll);
    }

    drawPlanet() {
        let index = Math.floor(Math.random() * this.planetDeck.length);
        let planet = this.planetDeck.splice(index, 1)[0];
        return planet;
    }

    rollDice() {
        console.log('rolling dice');
        const player = this.currentPlayer();
        const dice = [];
        for (let i = 0; i < player.level.dice; i++) {
           dice.push(new Die());
        }
        this.dicePool = dice;
        console.log('rolling dice dice pool:', this.dicePool);
        this.setState(GameState.ChooseDiceActions);
    }

    rerollAllDice() {
        console.log('rolling dice');
        const player = this.currentPlayer();
        const dice = [];
        for (let i = 0; i < player.level.dice; i++) {
           dice.push(new Die());
        }
        this.dicePool = dice;
        console.log('rolling dice dice pool:', this.dicePool);
        this.setState(GameState.ChooseDiceActions);
    }

    acquireEnergy() {
        console.log('acquire energy')
        const player = this.currentPlayer();
        player.energy += this.gatherResource(player, ResourceTypes.ENERGY);
        player.energy = Math.min(7, player.energy);
    }

    acquireCulture() {
        console.log('acquire culture')
        const player = this.currentPlayer();
        player.culture += this.gatherResource(player, ResourceTypes.CULTURE);
        player.culture = Math.min(7, player.culture);
    }

    gatherResource(player, resource) {
        let count = 0;
        this.currentPlanets.forEach(planet => {
            if (planet.resourceType === resource) {
                planet.landedShips.forEach(ship => {
                    if (ship.player.color === player.color) {
                        count++;
                    }
                })
                planet.orbitingShips.forEach(ship => {
                    if (ship.player.color === player.color) {
                        count++;
                    }
                })
            }
        });
        return count;
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

        const ships = this.playerShipsOrbitingPlanet(this.currentPlayer(), planet);
        if (ships.length === 0) {
            const errorMessage = 'You don\t have ships orbiting ' + planet.name;
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

        const ships = this.playerShipsOrbitingPlanet(this.currentPlayer(), planet);
        if (ships.length === 0) {
            const errorMessage = 'You don\t have ships orbiting ' + planet.name;
            this.setError(errorMessage);
            return;
        }

        this.agnosticAdvance(planet);
    }

    playerShipsOrbitingPlanet(player, planet) {
        const ships = planet.orbitingShips.filter(ship => {
            return ship.player.color === player.color;
        });
        return ships;
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