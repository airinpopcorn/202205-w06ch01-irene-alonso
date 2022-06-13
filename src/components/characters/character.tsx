import { CharacterModel } from "../../models/character";

export function Charater({ character }: { character: CharacterModel }) {
    return (
        <>
            <h3>{character.name}</h3>
            <p>{character.house}</p>
            <label htmlFor="kill">Kill</label>
            <input
                checked={character.isAlive}
                type="checkbox"
                name="isAlive"
                id="kill"
                onChange={handleChange}
            />
            <button onClick={handleClick}>Delete</button>
        </>
    );
}
