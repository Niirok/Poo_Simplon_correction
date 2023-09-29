import { Consommable } from "./Consommable";

export class Potion extends Consommable {
    
    private _effect: potEffect;
    private _power: potPower;

    constructor(prix: number, poids: number, nompot: string, eff: potEffect, pow: potPower) { 
        let nom_pot = "Potion de " + nompot
        super(prix, poids, nom_pot);
        this._effect = eff;
        this._power = pow;
    }

    use() {
        super.use()
    }
    
    consume() {
        console.log("La potion a été bue !")
    }

    public get effect(): potEffect {
        return this._effect;
    }
    public set effect(value: potEffect) {
        this._effect = value;
    }

    public get power(): potPower {
        return this._power;
    }
    public set power(value: potPower) {
        this._power = value;
    }


}

export enum potEffect{
    mana,
    life
}

export enum potPower { 
    feeble = 10,
    medium = 45,
    strong = 100
}