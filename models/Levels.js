export const LevelStats = {
    1: {
        number: 1,
        dice: 4,
        ships: 2,
        points: 0,
    },
    2: {
        number: 2,
        dice: 5,
        ships: 2,
        points: 1,
    },
    3: {
        number: 3,
        dice: 5,
        ships: 3,
        points: 2,
    },
    4: {
        number: 4,
        dice: 6,
        ships: 3,
        points: 3,
    },
    5: {
        number: 5,
        dice: 6,
        ships: 4,
        points: 5,
    },
    6: {
        number: 6,
        dice: 7,
        ships: 4,
        points: 8,
    }
}

export const getLevel = (levelNumber) => {
    if (levelNumber < 1) {
        return getLevel(1);
    }
    if (levelNumber > 6) {
        return getLevel(6);
    }
    return LevelStats[levelNumber];
}