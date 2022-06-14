import { configureStore } from "@reduxjs/toolkit";
import { Character } from "../models/character";
import { characterReducer } from "../reducers/characters/character.reducer";

export interface iState {
    characters: Array<Character>;
}

const preloadedState = {
    //Dejamos el preloadedState para poder testearlo
    characters: [],
};

export const store = configureStore({
    reducer: {
        characters: characterReducer,
    },
    preloadedState,
});
