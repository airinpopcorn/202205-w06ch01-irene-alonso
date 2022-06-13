import { CharacterModel } from "../models/character";

export async function getCharacters(): Promise<Array<CharacterModel>> {
    return [
        {
            id: CharacterModel.generateId(),
            name: "Jaime",
            house: "Lannister",
            isAlive: false,
        },
        {
            id: CharacterModel.generateId(),
            name: "Daenerys",
            house: "Targaryen",
            isAlive: false,
        },
    ];
}
