import { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Character } from "../models/character";
import * as ac from "../reducers/characters/actions.creators";

export function FormPage() {
    const initialState = {
        characterName: "",
        characterFamily: "",
        characterAge: "",
        characterCategory: "",
    };
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
    };

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        dispatch(
            ac.addCharacter({
                ...new Character(
                    formData.characterName,
                    formData.characterFamily,
                    Number(formData.characterAge),
                    formData.characterCategory as
                        | "king"
                        | "knight"
                        | "counselor"
                        | "squire"
                ),
            })
        );
        navigate("/");
    };

    return (
        <>
            <h2>Nuevo Personaje</h2>
            <form>
                <input
                    type="text"
                    placeholder="Nombre personaje"
                    name="characterName"
                    value={formData.characterName}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Familia personaje"
                    name="characterFamily"
                    value={formData.characterFamily}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Años personaje"
                    name="characterAge"
                    value={formData.characterAge}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Categoria personaje"
                    name="characterCategory"
                    value={formData.characterCategory}
                    onChange={handleChange}
                />
                <button onClick={handleSubmit}>Crear</button>
            </form>
        </>
    );
}
