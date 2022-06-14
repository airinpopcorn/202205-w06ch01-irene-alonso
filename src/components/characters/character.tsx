import { useDispatch } from "react-redux";
import { anyCharacter } from "../../models/character";
import { Counselor } from "../../models/counselor";
import { King } from "../../models/king";
import { Knight } from "../../models/knight";
import { Squire } from "../../models/squire";
import * as ac from "../../reducers/characters/actions.creators";

export function Character({ character }: { character: anyCharacter }) {
    const dispatch = useDispatch();

    function handleClick(buttonName: string) {
        if (buttonName === "Delete") {
            dispatch(ac.deleteCharacter(character));
        }
    }

    let templateOptional: JSX.Element = <div className="prueba"></div>;

    if (character instanceof King) {
        templateOptional = <li>Años de reinado: {character.kingdomYears}</li>;
    } else if (character instanceof Knight) {
        templateOptional = (
            <>
                <li>Arma: {character.weapon}</li>
                <li>Destreza: {character.skill}</li>
            </>
        );
    } else if (character instanceof Counselor) {
        templateOptional = <li>Asesora a: {character.chief.name}</li>;
    } else if (character instanceof Squire) {
        templateOptional = (
            <>
                <li>Peloteo: {character.submission}</li>
                <li>Sirve a: ${character.lord.name}</li>
            </>
        );
    }

    return (
        <>
            <li>
                <h3 className="liveName">Nombre: {character.name}</h3>
                <p>Familia: {character.family}</p>
                <p>Edad: {character.age} años</p>
                <ul>{templateOptional}</ul>
                <button onClick={() => handleClick("Matar")}>Matar</button>
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
