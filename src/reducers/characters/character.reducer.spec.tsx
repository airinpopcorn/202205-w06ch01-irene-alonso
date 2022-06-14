import { Character } from "../../models/character";
import { characterReducer } from "./character.reducer";
import * as ac from "./actions.creators";

describe("Given character Reducer", () => {
    const mockCharacters: Array<Character> = [
        {
            id: 1,
            name: "testName",
            family: "testHome",
            age: 2,
            category: "king",
            lifeState: true,
            message: "testMessage",
        },
        {
            id: 2,
            name: "testName2",
            family: "testHome2",
            age: 5,
            category: "king",
            lifeState: true,
            message: "testMessage2",
        },
    ];

    const mockCharacter: Character = {
        id: 3,
        name: "testName3",
        family: "testHome3",
        age: 10,
        category: "king",
        lifeState: true,
        message: "testMessage3",
    };
    describe("When we call it with load action", () => {
        test("Then it should return the array mockCharacters", () => {
            //Arrange
            const initialState: Array<Character> = [];
            const actionTest = ac.loadCharacters(mockCharacters);
            //Act
            const newState = characterReducer(initialState, actionTest);
            //Assert
            expect(newState).toEqual(mockCharacters);
            expect(newState).toHaveLength(1);
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
                ac.updateCharacter({ ...mockCharacters[0], lifeState: false })
            );
            expect(newState[0].lifeState).toEqual(false);
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
