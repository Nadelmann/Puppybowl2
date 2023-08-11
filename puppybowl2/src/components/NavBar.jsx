import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div id="navbar">
        <Link to="/allplayers">All Players</Link>{"    "}
        <Link to="/newplayers">New Player</Link>{"    "}
    </div>
    )
}