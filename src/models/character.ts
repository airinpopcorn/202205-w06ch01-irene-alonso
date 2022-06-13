export interface iCharacterModel {
    id: number;
    name: string;
    house: string;
    isAlive: boolean;
}

export class CharacterModel {
    id: number;
    isAlive: boolean;
    static generateId(): number {
        return Math.ceil(Math.random() * 100_00);
    }
    constructor(public name: string, public house: string) {
        this.isAlive = false;
        this.id = CharacterModel.generateId();
    }
}
