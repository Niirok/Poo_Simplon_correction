import {Character} from "../Character/Character"

export class CombatHandler { 

    private _perso1: Character
    private _perso2: Character

    Fight() { 
        this.perso1.onFightBeginning()//À implémenter TP J2
        this.perso2.onFightBeginning()//À implémenter TP J2
        while (!this.perso1.isDead() && !this.perso2.isDead()) {
            this.OneTurn();
        }
        this.perso1.onFightEnding()//À implémenter TP J2
        this.perso2.onFightEnding()//À implémenter TP J2

    }

    OneTurn() {
        let odrePJ: Character[] = [this.perso1, this.perso2].sort((p1, p2) => (p1.speed < p2.speed ? -1 : 1))
        let target 
        
        odrePJ.forEach((perso) => {
            if (perso == this.perso1)
                target = this.perso2;
            else {
                target = this.perso1;
            }

            if (!perso.isDead()) {
                perso.BeforeAttack(target);
                console.log(perso.nom + " se prépare à attaquer son adversaire " + target.nom)
                console.log(target.nom + " est à " + target.currentHealth)
                perso.Attack(target);
                perso.AfterAttack(target);
                console.log(target.nom + " est à " + target.currentHealth + " point de vie. " + target.isDead());
                if (target.isDead()) { 
                    console.log(target.nom + " est mort !")
                    console.log(perso.nom + " s'en sort vainqueur !")
                    perso.getXppoint(target.level);//TODO 
                    perso.fullHeal();//TODO 
                }

            }
        

        });
    }

    constructor(p1: Character, p2: Character) { 
        this._perso1 = p1;
        this._perso2 = p2;

    }

    public get perso1(): Character {
        return this._perso1
    }
    public set perso1(value: Character) {
        this._perso1 = value
    }
    public get perso2(): Character {
        return this._perso2
    }
    public set perso2(value: Character) {
        this._perso2 = value
    }
}