abstract class Arme extends Equipement {

    private _bonusForce: number;


    abstract use(): any
    abstract equipe() : any

    constructor(prix : number, poids : number, level: number, bonus_force : number) { 
        super(prix, poids, level);
        this._bonusForce = bonus_force
    }

    public get bonusForce(): number {
        return this._bonusForce;
    }
    public set bonusForce(value: number) {
        this._bonusForce = value;
    }
}

enum emplacementArme {
    deuxMains,
    UneMain    //À Completer ?
}