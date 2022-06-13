import { createReducer } from "@reduxjs/toolkit";
import { iteratorSymbol } from "immer/dist/internal";
import { CharacterModel } from "../../models/character";
import * as ac from "./actions.creators";
import { actionTypes } from "./actions.types";

const initialState: Array<CharacterModel> = [];

export const characterReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(ac.loadCharacters, (state, action) => [...action.payload])
        .addCase(ac.addCharacter, (state, action) => [...state, action.payload])
        .addCase(ac.updateCharacter, (state, action) =>
            state.filter((item) => item.id !== action.payload.id)
        )
        .addCase(ac.deleteCharacter, (state, action) =>
            state.filter((item) => item.id !== action.payload.id)
        )
        .addDefaultCase((state) => state);
});
