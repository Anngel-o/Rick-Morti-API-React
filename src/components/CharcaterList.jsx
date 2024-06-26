import React from "react";
import { useEffect, useState } from "react"
import Character from "./Character";

const NavPage = (props) => {
    return (
        <div className="d-flex justify-content-between align-items-center">
            <button type="button" className="btn btn-outline-light" onClick={
                () => {
                    if (props.page > 1) {
                        props.setPage(p => p - 1);
                    } else {
                        return null;
                    }
                }
            }>Page: {props.page - 1}</button>
            <button className="btn btn-primary" onClick={() => {
                props.setPage(p => p + 1);
            }}>
                Page {props.page + 1}
            </button>
        </div>
    )
}
const CharacterList = () => {
    const [charcaters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
            const data = await response.json();
            setLoading(false);
            setCharacters(data.results);
        }

        fetchData()
    }, [page]);

    return (
        <div className="container">
            <NavPage page={page} setPage={setPage} />
            {loading ? (
                <h1>Loading...</h1>
            ) : <div className="row">
                {
                    charcaters.map(character => {
                        return (
                            <div className="col-md-4" key={character.id}>
                                <Character character={character} />
                            </div>
                        )
                    }
                    )
                }
            </div>
            }
            <NavPage page={page} setPage={setPage} />
        </div>
    )
}

export default CharacterList