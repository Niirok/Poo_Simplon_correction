import { Character } from "../Character";
import MonsterKind from "./MonsterKind";

export abstract class Monster extends Character{
    private _monsterkind: MonsterKind;

    constructor(name : string, monsterkind : MonsterKind) { 
        super(name);
        this._monsterkind = monsterkind;     
    }

    abstract TriggerBeforeAttack(target: Character): any

    abstract TriggerAttack(target: Character, attack_result: number) : any

    abstract TriggerAfterAttack(target: Character) : any

    public get monsterkind(): MonsterKind {
        return this._monsterkind;
    }

    public set monsterkind(value: MonsterKind) {
        this._monsterkind = value;
    }
}