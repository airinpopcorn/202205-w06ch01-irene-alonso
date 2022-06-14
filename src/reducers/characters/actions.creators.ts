import { createAction } from "@reduxjs/toolkit";
import { Character } from "../../models/character";
import { actionTypes } from "./actions.types";

export const loadCharacters = createAction<Array<Character>>(
    actionTypes["character@load"]
);

export const addCharacter = createAction<Character>(
    actionTypes["character@add"]
);

export const updateCharacter = createAction<Character>(
    actionTypes["character@update"]
);

export const deleteCharacter = createAction<Character>(
    actionTypes["character@delete"]
);
