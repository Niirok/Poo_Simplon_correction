import { Monster } from "./Monster";
import MonsterKind from "./MonsterKind";

export abstract class DragonKind extends Monster {

    private static monsterKind = MonsterKind.Dragon

    constructor(name: string) {
        super(name, DragonKind.monsterKind);
    }

}