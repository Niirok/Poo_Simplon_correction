import { Character } from "../Character";
import { GoblinKind } from "./GoblinKind";

export class Gobelin extends GoblinKind {
    
    constructor() {
        super("Gobelin des Montagnes");
        this.level = 1;
        this.xpoints = 110;
        this.maxHealth = 20;
        this.currentHealth = this.maxHealth;
        this.force = 6;
        this.speed = 3;
        this.intel = 0;
        this.mana = 0;
        this.crithit = 0.01;
    }

    TriggerBeforeAttack(target: Character) {    }
    TriggerAttack(target: Character, attack_result: number) { }
    TriggerAfterAttack(target: Character) {}
}
