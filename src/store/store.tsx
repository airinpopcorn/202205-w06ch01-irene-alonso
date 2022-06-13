import { configureStore } from "@reduxjs/toolkit";
import { CharacterModel } from "../models/character";

export interface iState {
    characters: Array<CharacterModel>;
}

const preloadedState = {
    characters: [],
};

export const store = configureStore({
    reducer: {
        characters: characterReducer,
    },
    preloadedState,
});
