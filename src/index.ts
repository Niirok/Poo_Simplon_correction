import { CombatHandler } from "./Battles/CombatHandler";
import { Character } from "./Character/Character";
import { Hero } from "./Character/Hero";
import { Viking } from "./Jobs/Viking";

let Anthony = new Hero("Anthony", new Viking());
let mechant = new Hero("Le Vile-Brequin", new Viking())

console.log(Anthony)
console.log(mechant)

let FightManager = new CombatHandler(Anthony, mechant);

FightManager.OneTurn();

FightManager.Fight();
