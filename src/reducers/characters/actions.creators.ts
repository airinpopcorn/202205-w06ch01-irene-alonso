import { createAction } from "@reduxjs/toolkit";
import { create } from "domain";
import { CharacterModel } from "../../models/character";
import { actionTypes } from "./actions.types";

export const loadCharacters = createAction<Array<CharacterModel>>(
    actionTypes["character@load"].toLocaleString()
);

export const addCharacter = createAction<CharacterModel>(
    actionTypes["character@add"].toLocaleString()
);

export const updateCharacter = createAction<CharacterModel>(
    actionTypes["character@update"].toLocaleString()
);

export const deleteCharacter = createAction<CharacterModel>(
    actionTypes["character@delete"].toLocaleString()
);
