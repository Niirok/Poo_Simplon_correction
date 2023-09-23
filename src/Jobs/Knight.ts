import { Job } from "./Job";

export class Knight extends Job{

/*
À la création d'un personnage chevalier,
 il recoit un nom, +40 points de vie supplémentaires,
  +5 de force, +1 de vitesse, +1 d'intelligence,
   5 points de mana et +3% de chance de coup critique.
*/

    constructor(
        jobName : string = "Chevalier",
        bonusHealth : number = 40,
        bonusForce : number = 5,
        bonusSpeed : number = 1,
        bonusIntel : number = 1,
        bonusManaPx : number = 5,
        bonusCritHit : number = 0.03,
    ){ 
        super(jobName, bonusHealth, bonusForce, bonusSpeed, bonusIntel, bonusManaPx, bonusCritHit)
    }
}