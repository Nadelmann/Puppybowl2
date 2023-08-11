import './App.css'
import { Routes, Route } from "react-router-dom"
import AllPlayers from './components/AllPlayers'
import NewPlayers from './components/NewPlayersForm'
import NavBar from './components/NavBar'
import { useState } from 'react'
import SinglePlayer from './components/SinglePlayer'

function App() {
    const [selectedPlayerId, setSelectedPlayerId] = useState(null);

    return (
        <>
            <div id="container">
                <div id="main-section">
                        <NavBar />
                        <Routes>
                            <Route path="/allplayers" element={<AllPlayers selectedPlayerId={selectedPlayerId}  setSelectedPlayerId={setSelectedPlayerId} />} />
                            <Route path="/newplayers" element={<NewPlayers />} />
                            <Route path="/allplayers/:id" element={<SinglePlayer />} />
                        </Routes>
                </div>
            </div>
        </>
    );
}

export default App;
