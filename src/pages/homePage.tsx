import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCharacters } from "../data/characters";
import { iState } from "../store/store";
import * as ac from "../reducers/characters/actions.creators";
import { Character } from "../components/characters/character";
import { useNavigate } from "react-router-dom";

export function HomePage() {
    const characters = useSelector((state: iState) => state.characters);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        createCharacters().then((characters) => {
            dispatch(ac.loadCharacters(characters));
        });
    }, [dispatch]);

    const handleNavigate = () => {
        navigate("/form");
    };

    return (
        <main>
            <div>
                <h2>Game of Thrones - List</h2>
                <button type="button" onClick={handleNavigate}>
                    Añadir Personaje
                </button>
                <ul>
                    {characters.map((item) => (
                        <Character key={item.id} character={item}></Character>
                    ))}
                </ul>
            </div>
        </main>
    );
}
