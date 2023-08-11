import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function SinglePlayer() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [player, setPlayer] = useState(null);

    async function handleClick() {
        try {
             await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-C/players/${id}/`,
                {
                    method: 'DELETE'
                });
            navigate(-1);
        } catch (error) {
console.log(error);
        }
    }

    useEffect(() => {
        async function fetchSinglePlayer() {
            try {
                const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-C/players/${id}/`);
                const result = await response.json();
                setPlayer(result.data.player);
                console.log(result.data.player);
            } catch (error) {
                console.log(error);
            }
        }
        fetchSinglePlayer();
    }, [id])

    if (player) {
        return (
            <div>
                <h1>{player.name}</h1>
                <img 
                src={player.imageUrl} style={{maxWidth: "100%", maxHeight: "400px"}}
                alt={player.name} 
                />

                <p>ID:{player.id}</p>
                <p>Breed: {player.breed}</p>
                <p>Field/Bench Status: {player.status}</p>
                <p>Team ID: 
                {player.teamId}
                </p>
                <p>Cohort ID: {player.cohortId}</p>
                <button onClick={handleClick}>Remove Player</button>
                {console.log(id)}
            </div>
        )
    } else {
        return null;
    }
}