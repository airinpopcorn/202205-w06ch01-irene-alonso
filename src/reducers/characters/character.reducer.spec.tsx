import { CharacterModel } from "../../models/character";
import { characterReducer } from "./character.reducer";
import * as ac from "./actions.creators";

const mockCharacters: Array<CharacterModel> = [
    {
        id: 1,
        name: "testName",
        house: "testHome",
        isAlive: false,
    },
    {
        id: 2,
        name: "testName2",
        house: "testHome2",
        isAlive: false,
    },
];

const mockCharacter: CharacterModel = {
    id: 3,
    name: "testName3",
    house: "testHouse3",
    isAlive: false,
};

describe("Given character Reducer", () => {
    describe("When we call it with load action", () => {
        test("Then it should return the array mockCharacters", () => {
            const newState = characterReducer(
                [],
                ac.loadCharacters(mockCharacters)
            );
            expect(newState).toEqual(mockCharacters);
        });
    });
    describe("When we call it with add action", () => {
        test("Then it should return the new mockCharacter", () => {
            const newState = characterReducer(
                [],
                ac.addCharacter(mockCharacter)
            );
            expect(newState).toEqual([mockCharacter]);
        });
    });
    describe("When we call it with update action", () => {
        test("Then it should return the array mockCharacters", () => {
            const newState = characterReducer(
                mockCharacters,
                ac.updateCharacter({ ...mockCharacters[0], isAlive: true })
            );
            expect(newState[0].isAlive).toEqual(true);
        });
    });
    describe("When we call it with delete action", () => {
        test("Then it should delete the mockCharacters item", () => {
            const newState = characterReducer(
                mockCharacters,
                ac.deleteCharacter(mockCharacters[0])
            );
            expect(newState).toEqual([mockCharacters[1]]);
        });
    });
});
