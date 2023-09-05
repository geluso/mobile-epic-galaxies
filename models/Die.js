export const DiceActions = {
    AcquireEnergy: Symbol('AcquireEnergy'),
    AcquireCulture: Symbol('AcquireCulture'),
    MoveShip: Symbol('MoveShip'),
    UtilizeColony: Symbol('UtilizeColony'),
    AdvanceDiplomacy: Symbol('AdvanceDiplomacy'),
    AdvanceEconomy: Symbol('AdvanceEconomy'),
}

export const DiceActionsArray = [...Object.values(DiceActions)];

export class Die {
    constructor() {
        const index = Math.floor(Math.random() * DiceActionsArray.length);
        this.face = DiceActionsArray[index];
    }
}