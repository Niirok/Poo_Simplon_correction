import { CombatHandler } from "./Battles/CombatHandler";
import { Character } from "./Character/Character";
import { Hero } from "./Character/Heroes/Hero";
import { Viking } from "./Character/Heroes/Jobs/Viking";
import { Potion, potEffect, potPower } from "./Objets/Potion";

let Anthony = new Hero("Anthony", new Viking());
let mechant = new Hero("Le Vile-Brequin", new Viking())

console.log(Anthony)
console.log(mechant)

let FightManager = new CombatHandler(Anthony, mechant);

FightManager.OneTurn();

let gagnant: Character = FightManager.Fight();

console.log("Santé actuelle du vainqueur " + gagnant.currentHealth)

gagnant.utilise(new Potion(1, 1, "de Vie Mineure", potEffect.life, potPower.feeble))

console.log("Santé actuelle du vainqueur " + gagnant.currentHealth+ " Après avoir bu une petite potion de vie")

