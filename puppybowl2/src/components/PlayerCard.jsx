import PropTypes from 'prop-types';

export default function PlayerCard({ player, setSelectedPlayerId }) {
    return (
        <div className="card-container">
            <div
                className="card"
                onClick={() => {
                    setSelectedPlayerId(player.id);
                }}
            >
                <img src={player.imageUrl} alt={player.name} />
                <h1>{player.name}</h1>
                <p>Breed: {player.breed}</p>
                <p>Status: {player.status}</p>
                <p>Team ID: {player.teamId}</p>
            </div>
        </div>
    );
}

PlayerCard.propTypes = {
    player: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        breed: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        teamId: PropTypes.number,
        cohortId: PropTypes.number.isRequired,
    }).isRequired,
    setSelectedPlayerId: PropTypes.func.isRequired,
};
