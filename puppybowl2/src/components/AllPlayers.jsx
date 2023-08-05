import { useState } from "react";

export default fuction allPlayers() {
    const [players, setPlayers] = useState("");

        try {
            const response = await fetch();
            const players = await response.json();
        } catch (error) {
            console.error(error);
        }

    return (

    )
}