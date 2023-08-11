import { useEffect, useState } from "react";
import PlayerCard from "./PlayerCard";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

export default function AllPlayers({ setSelectedPlayerId }) {
    const [players, setPlayers] = useState([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    async function handleClick(playerId) {
        try {
            const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-C/players/${playerId}/`, {
                method: 'DELETE'
            });

            if (response.ok) {
                setPlayers(prevPlayers => prevPlayers.filter(player => player.id !== playerId));
            } else {
                console.log("Delete request failed.");
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        async function fetchPlayers() {
            try {
                const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-C/players');
                const data = await response.json();
                console.log(data.data.players);
                setPlayers(data.data.players);
                console.log(data.results);
            } catch (error) {
                console.error(error);
            }
        }
        fetchPlayers();
    }, []); 

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>All Players</h1>
            <input
                type="text"
                placeholder="Search players..."
                value={search}
                onChange={handleSearchChange}
            />
            <div>
                {players.map((player) => (
                    <div key={player.id}>
                        <PlayerCard
                            player={player}
                            setSelectedPlayerId={setSelectedPlayerId}
                        />
                        <button className="detailsButton" onClick={() => navigate(`/allplayers/${player.id}`)}>Details</button>
                        <button className="removeButton" onClick={() => handleClick(player.id)}>Remove Player</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

AllPlayers.propTypes = {
    setSelectedPlayerId: PropTypes.func.isRequired,
};