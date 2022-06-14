import { createReducer } from "@reduxjs/toolkit";
import { Character } from "../../models/character";
import * as ac from "./actions.creators";

const initialState: Array<Character> = [];

export const characterReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(ac.loadCharacters, (state, action) => [...action.payload])
        .addCase(ac.addCharacter, (state, action) => [...state, action.payload])
        .addCase(ac.updateCharacter, (state, action) =>
            state.map((item) =>
                item.id === action.payload.id ? action.payload : item
            )
        )
        .addCase(ac.deleteCharacter, (state, action) =>
            state.filter((item) => item.id !== action.payload.id)
        )
        .addDefaultCase((state) => state);
});
