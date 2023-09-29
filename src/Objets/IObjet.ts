import { ICharacter } from "../Character/ICharacter";

export interface IObjet { 
    prix: number;
    poids: number;
    name: string;

    use(personnage : ICharacter): any;
}