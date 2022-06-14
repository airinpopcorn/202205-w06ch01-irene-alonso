import { useDispatch } from "react-redux";

import { iCharacter } from "../../models/character";
import * as ac from "../../reducers/characters/actions.creators";

export function Character({ character }: { character: iCharacter }) {
    const dispatch = useDispatch();

    function handleClick(buttonName: string) {
        if (buttonName === "Delete") {
            dispatch(ac.deleteCharacter(character));
        }
    }
    function handleKill() {
        dispatch(
            ac.updateCharacter({
                ...character,
                lifeState: !character.lifeState,
            })
        );
    }

    let templateOptional: JSX.Element = <div className="prueba"></div>;

    if (character.category === "king") {
        templateOptional = <li>Años de reinado: {character.kingdomYears}</li>;
    } else if (character.category === "knight") {
        templateOptional = (
            <>
                <li>Arma: {character.weapon}</li>
                <li>Destreza: {character.skill}</li>
            </>
        );
    } else if (character.category === "counselor") {
        templateOptional = <li>Asesora a: {character.chief?.name}</li>;
    } else if (character.category === "squire") {
        templateOptional = (
            <>
                <li>Peloteo: {character.submission}</li>
                <li>Sirve a: ${character.lord?.name}</li>
            </>
        );
    }

    return (
        <>
            <li>
                <h3 className={!character.lifeState ? "deathName" : ""}>
                    Nombre: {character.name}
                </h3>
                <p>Familia: {character.family}</p>
                <p>Edad: {character.age} años</p>
                <ul>{templateOptional}</ul>
                <button onClick={handleKill}>Matar</button>
                <button
                    onClick={() => {
                        handleClick("Delete");
                    }}
                >
                    Borrar
                </button>
            </li>
        </>
    );
}
