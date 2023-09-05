export const GameState = {
    InitiateRoll: Symbol('InitiateRoll'),

    ChooseDiceActions: Symbol('ChooseDiceActions'),
    FreeBatchReroll: Symbol('FreeBatchReroll'),
    RerollOneDie: Symbol('RerollOneDie'),

    SendShipOrigin: Symbol('SendShipOrigin'),
    SendShipDestination: Symbol('SendShipDestination'),
    ChooseColony: Symbol('ChooseColony'),
    AdvanceDiplomacy: Symbol('AdvanceDiplomacy'),
    AdvanceEconomy: Symbol('AdvanceEconomy'),
}