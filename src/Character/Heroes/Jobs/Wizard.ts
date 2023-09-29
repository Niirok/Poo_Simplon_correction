import { Character } from "../Character/Character";
import { SpellBook } from "../Spells/SpellBook";
import { Job } from "./Job";

export class Wizard extends Job{

    spellBook : SpellBook;

    constructor(
        jobName : string = "Magicien",
        bonusHealth : number = 5, // pv bonus de Base 
        bonusForce : number = 1,
        bonusSpeed : number = 1,
        bonusIntel : number = 5,
        bonusManaPx : number = 45,
        bonusCritHit : number = 0.00,
    ){ 
        super(jobName, bonusHealth, bonusForce, bonusSpeed, bonusIntel, bonusManaPx, bonusCritHit)
        this.spellBook = new SpellBook()
    }

    SpecialBeforeAttackCapacity(char: Character, target: Character) {  
    }

    SpecialAttackCapacity() {}
            
    SpecialAfterAttackCapacity(char: Character, target: Character) { }

}