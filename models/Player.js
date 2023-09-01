import { LevelStats } from "./Levels";

export class Player {
    constructor(color) {
        this.color = color;
        this.level = 1;
        this.energy = 2;
        this.culture = 1;

        console.log('level stats:', LevelStats[this.level]);
        const {dice, ships, points} = LevelStats[this.level];
        this.dice = dice;
        this.ships = ships;
        this.points = points;
    }
}