abstract class Accesoire extends Equipement {
    armor_value?: number

    abstract use(): any
    abstract equipe() : any

    constructor(prix : number, poids : number, level: number, armor_val : number) { 
        super(prix, poids, level);
        this.armor_value = armor_val
    }
}

enum emplacementAccessoire {
    Amulette,
    Anneau,
    Bracelet
}