export const ResourceTypes = {
    ENERGY: Symbol('ResourceEnergy'),
    CULTURE: Symbol('ResourceCulture'),
}

export const ProgressTypes = {
    ECONOMY: Symbol('ProgressEconomy'),
    DIPLOMACY: Symbol('ProgressDiplomacy'),
}

export const textToResourceType = (text) => {
    const lookup = {
        'E': ResourceTypes.ENERGY,
        'C': ResourceTypes.CULTURE,
    }
    return lookup[text]
}

export const textToProgressType = (text) => {
    const lookup = {
        'E': ProgressTypes.ECONOMY,
        'D': ProgressTypes.DIPLOMACY,
    }
    return lookup[text]
}

export class Planet {
    constructor(name, progressType, spaces, resourceType, points, text) {
        this.name = name;
        this.progressType = progressType;
        this.spaces = spaces;
        this.resourceType = resourceType;
        this.points = points;
        this.text = text;
    }

    toJSON() {
        return {
            name: this.name,
            progressType: this.progressType,
            spaces: this.spaces,
            resourceType: this.resourceType,
            points: this.points,
            text: this.text,
        };
    }
}