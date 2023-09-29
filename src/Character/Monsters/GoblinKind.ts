import { Monster } from "./Monster";
import MonsterKind from "./MonsterKind";

export abstract class GoblinKind extends Monster {

    private static monsterKind = MonsterKind.Goblinoid

    constructor(name: string) {
        super(name, GoblinKind.monsterKind);
    }

}