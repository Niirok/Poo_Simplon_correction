import { IObjet } from "../Objets/IObjet"

export interface ICharacter{
 
    name: string
    level: number
    xpoints: number
    maxHealth: number
    currentHealth: number
    force: number
    speed: number
    intel: number
    mana: number
    crithit: number

    TriggerBeforeAttack(target: ICharacter): any
    
    TriggerAttack(target: ICharacter, attack_result : number) : any

    TriggerAfterAttack(target: ICharacter) : any
    
    BeforeAttack(target: ICharacter) : any
    
    ClassicalAttack(): number;

    Attack(target: ICharacter): number;

    AfterAttack(target: ICharacter) : any

    Heal(regainHP: number): any
    
    AbsorbMana(manaleech: number) : any

    levelUp(): any

    isDead(): boolean 

    utilise(obj:IObjet) : any
}
