import { Planet, textToProgressType, textToResourceType } from "./Planet";

export const ALL_PLANETS = [
    "Jakks;D;2;C;1;Acquire 1 Culture",
    "Vici-KS156;E;2;E;1;Acquire 1 Energy",
    "Drewkaiden;E;2;C;1;Advance +1 Diplomacy",
    "Leandra;D;2;E;1;Advance +1 Economy",
    "Birkomius;D;2;C;1;If you are followed on this turn, acquire 1 Culture per follow",
    "Bisschop;E;2;E;1;If you are followed on this turn, acquire 1  Energy per follow",
    "Tifnod;E;2;C;1;Regress 1 enemy ship by 1 Diplomacy",
    "Vizcarra;D;2;E;1;Regress 1 enemy ship by 1 Economy",
    "MJ-120210;D;3;E;2;Acquire 2 Energy",
    "Helios;D;3;C;2;Discard an un-occupied planet in the middle and replace it with a new planet",
    "Mared;E;3;E;2;If your empire level is the lowest, upgrade your empire for 1 less Energy/Culture",
    "Lureena;E;3;C;2;Immediately upgrade your empire, you may spend Energy and/or Culture",
    "Zalax;D;3;C;2;Reroll any number of your inactive dice",
    "Hoefker;E;3;C;2;Spend 1 Energy to acquire 2 Culture",
    "CLJ-0517;E;3;E;2;Steal 1 Culture from another player (only once per turn)",
    "La-Torres;D;3;C;2;Steal 1 Energy from another player (only once per turn)",
    "Pembertonia-Major;E;4;E;3;Convert any number of Culture into Energy",
    "Omicron Fenzi;D;4;C;3;Convert any number of Energy into Culture",
    "Nagato;E;4;E;3;Spend 1 Culture to move 2 of your ships",
    "Padraigin-3110;E;4;C;3;Spend 2 Culture to advance +2 Diplomacy",
    "Jorg;D;4;C;3;Spend 2 Culture to regress 1 enemy ship by -2",
    "Nakagawakozi;D;4;E;3;Spend 2 Energy to advance +2 Economy",
    "Brumbaugh;D;4;E;3;Spend 2 Energy to regress 2 enemy ships by -1",
    "Umbra-Forum;E;4;C;3;Utilize the action of an un-colonized planet",
    "JAC-110912;E;5;C;5;Acquire 2 Culture, all other players acquire 1 Culture",
    "Gleam-Zanier;D;5;E;5;Acquire 2 Energy, all other players acquire 1 Energy",
    "Maia;D;5;C;5;Discard 2 inactive dice, acquire 2 Energy and 2 Culture",
    "Andellouxian-6;E;5;C;5;Displace 1 of your orbiting ships, acquire Energy/Culture = ship's level",
    "Walsfeo;E;5;E;5;Pay 1 Culture to a player to utilize one of their colonized planets",
    "Sargus-36;D;5;C;5;Pay 1 Energy to a player to utilize one of their colonized planets",
    "Zavodnick;E;5;E;5;Perform any 1 action; all other players may follow that action for free",
    "BSW-10-1;D;5;E;5;Regress one of your ships -1, then advance another one of your ships +1",
    "Aughmoore;D;6;E;7;Acquire Culture for every ship landed in your galaxy",
    "Shouhua;D;6;E;7;Advance a ship +1",
    "Nibiru;D;6;C;7;Enemies must pay 2 Culture per follow this turn",
    "Gort;E;6;E;7;Move one of your ships to another colony track at an equal level",
    "Terra-Bettia;D;6;E;7;Other players advance a ship +1, then you advance a ship +2",
    "K-Widow;E;6;C;7;Regress an enemy ship -1",
    "Piedes;E;6;E;7;Repeat the action on an already activated die",
    "Gyore;E;6;C;7;Set 1 inactive die to a face of your choice",
].map(planet => {
    let [name, progressType, spaces, resourceType, points, text] = planet.split(";");
    console.log('creating planet', planet.name);
    
    progressType = textToProgressType(progressType);
    resourceType = textToResourceType(resourceType);

    spaces = parseInt(spaces);
    points = parseInt(points);

    return new Planet(name, progressType, spaces, resourceType, points, text);
});

export const PLANET_LOOKUP = ALL_PLANETS.reduce((lookup, planet) => {
    lookup[planet.name] = planet;
    console.log('adding planet to lookup', planet.name);
    return lookup;
}, {});