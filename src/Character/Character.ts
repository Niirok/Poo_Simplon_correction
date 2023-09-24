import { Job } from "../Jobs/Job";
import { getJobFromString } from "../Jobs/misc"

export class Character {
 
    private _nom: string = ""
    private _job?: Job
    private _level: number = 0
    private _xpoints: number = 0
    private _maxHealth: number = 50
    private _currentHealth: number = 50
    private _force: number = 10
    private _speed: number = 10
    private _intel: number = 10
    private _mana: number = 50
    private _crithit: number = 0.02

    constructor(nom: string, job: Job) {
        this.job = job!
        this.nom = nom
        this.level = 0
        this.xpoints = 0
        this.maxHealth = 50 + this.job.bonusHealth
        this.currentHealth = this.maxHealth 
        this.force =  10 + this.job.bonusForce
        this.speed =  10 + this.job.bonusSpeed
        this.intel =  10 + this.job.bonusIntel
        this.mana =  50 + this.job.bonusManaPx
        this.crithit = 0.02 + this.job.bonusCritHit
        
    }

    AfterAttack(target: Character) {
        this.TriggerAfterAttack(target);
    }

    TriggerAfterAttack(target: Character) {
        this.job.SpecialAfterAttackCapacity(this, target);
    }

    BeforeAttack(target: Character) {
        this.TriggerBeforeAttack(target);
    }
    TriggerBeforeAttack(target: Character) {
        this.job.SpecialBeforeAttackCapacity(this, target);
    }

    Attack(target: Character) : number{
        let attack_result = this.ClassicalAttack()
        target.currentHealth -= attack_result;
        this.TriggerAttack(target, attack_result)

        return attack_result;
        
    }

    ClassicalAttack(): number {
        let dommage: number = this._force;

        if(Math.random() < this._crithit) {
            dommage *= 2
        }
        return dommage;
    }

    TriggerAttack(target: Character, attack_result : number) {
        this.job.SpecialAttackCapacity(this, target, attack_result);
    }

    Heal(regainHP: number) {
        if (regainHP + this.currentHealth > this.maxHealth) {
            this.currentHealth = this.maxHealth
        } else { 
            this.currentHealth += regainHP
        }
    }
    
    AbsorbMana(manaleech: number) {
        this.mana += manaleech;
    }

    levelUp(): any { 
        //TODO  
    }

    isDead(): boolean {
        return this.currentHealth <= 0;

    }
 /* 
////////////////////////////////////////////////////////////////////////////////////////////////
  ____      _   _                                  _            _   _                
 / ___| ___| |_| |_ ___ _ __ ___    __ _ _ __   __| |  ___  ___| |_| |_ ___ _ __ ___ 
| |  _ / _ \ __| __/ _ \ '__/ __|  / _` | '_ \ / _` | / __|/ _ \ __| __/ _ \ '__/ __|
| |_| |  __/ |_| ||  __/ |  \__ \ | (_| | | | | (_| | \__ \  __/ |_| ||  __/ |  \__ \
 \____|\___|\__|\__\___|_|  |___/  \__,_|_| |_|\__,_| |___/\___|\__|\__\___|_|  |___/*/
////////////////////////////////////////////////////////////////////////////////////////////////
    
    public get nom(): string {
        return this._nom
    }
    
    public set nom(value: string) {
        this._nom = value
    }

    public get job(): Job {
        return this._job!;
    }
    public set job(value: Job) {
        this._job = value;
    }
    
    public get level(): number {
        return this._level
    }

    public set level(value: number) {
        this._level = value
    }
    
    public get xpoints(): number {
        return this._xpoints
    }

    public set xpoints(value: number) {
        this._xpoints = value
    }

    public get maxHealth(): number {
        return this._maxHealth
    }

    public set maxHealth(value: number) {
        this._maxHealth = value
    }
    
    public get currentHealth(): number {
        return this._currentHealth
    }

    public set currentHealth(value: number) {
        this._currentHealth = value
        if (this.currentHealth < 0)
            this.currentHealth = 0
    }
    
    public get force(): number {
        return this._force
    }

    public set force(value: number) {
        this._force = value
    }

    public get speed(): number {
        return this._speed
    }

    public set speed(value: number) {
        this._speed = value
    }

    public get intel(): number {
        return this._intel
    }

    public set intel(value: number) {
        this._intel = value
    }

    public get mana(): number {
        return this._mana
    }

    public set mana(value: number) {
        this._mana = value
    }

    public get crithit(): number {
        return this._crithit
    }

    public set crithit(value: number) {
        this._crithit = value
    }
}
