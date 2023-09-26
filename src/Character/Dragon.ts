import { Character } from "./Character";
import { DragonKind } from "./DragonKind";

export class Dragon extends DragonKind {
    
    constructor() {
        super("Dragon d'or");
        this.level = 4;
        this.xpoints = 1000;
        this.maxHealth = 150;
        this.currentHealth = this.maxHealth;
        this.force = 19;
        this.speed = 15;
        this.intel = 10;
        this.mana = 15;
        this.crithit = 0.15;
    }

    TriggerBeforeAttack(target: Character) {    }
    TriggerAttack(target: Character, attack_result: number) { }
    TriggerAfterAttack(target: Character) {}
}
