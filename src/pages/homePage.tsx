import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCharacters } from "../data/characters";
import { iState } from "../store/store";
import * as ac from "../reducers/characters/actions.creators";
import { Character } from "../components/characters/character";

export function HomePage() {
    const characters = useSelector((state: iState) => state.characters);
    const dispatch = useDispatch();

    useEffect(() => {
        createCharacters().then((characters) => {
            dispatch(ac.loadCharacters(characters));
        });
    }, [dispatch]);

    return (
        <main>
            <div>
                <h2>Game od Thrones - List</h2>
                <button>Añadir Personaje</button>
                <ul>
                    {characters.map((item) => (
                        <Character key={item.id} character={item}></Character>
                    ))}
                </ul>
            </div>
        </main>
    );
}
