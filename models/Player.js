import * as Levels from "./Levels";

export class Player {
    constructor(color) {
        this.color = color;
        this.energy = 2;
        this.culture = 1;

        this.level = Levels.getLevel(1);
        this.colonies = [];
    }

    toJSON() {
        return {
            color: this.color,
            level: this.level,
            energy: this.energy,
            culture: this.culture,

            dice: this.dice,
            ships: this.ships,
            points: this.points,

            colonies: this.colonies.map(colony => colony.toJSON()),
        }
    }

    levelUp() {
        this.level = Levels.getLevel(this.level.number + 1);
    }
}