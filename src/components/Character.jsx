import React from "react";
import './styles.css'

const Character = ({character}) => {

    return (
        <div className="text-center p-5 character">
            <h3 className="character-name">{character.name}</h3>
            <h4 className="character-status">{character.status}</h4>
            <img className="img-fluid rounded-pill img-character" src={character.image} alt={character.name} />
            <p className="character-origin">{character.origin.name}</p>
        </div>
    )
}

export default Character
