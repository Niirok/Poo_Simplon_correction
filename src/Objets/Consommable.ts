export abstract class Consommable implements IObjet {
    private _prix: number;
    private _poids: number;
    private _name: string;

    use() { 
        this.consume();
    }

    abstract consume() : any
    
    constructor(prix : number, poids : number, name : string) {
        this._prix = prix;
        this._poids = poids;
        this._name = name;
    }

    public get prix(): number {
        return this._prix;
    }
    public set prix(value: number) {
        this._prix = value;
    }

    public get poids(): number {
        return this._poids;
    }
    public set poids(value: number) {
        this._poids = value;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    

}

