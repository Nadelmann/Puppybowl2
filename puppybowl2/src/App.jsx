
import './App.css'
import {Routes, Route, useNavigate} from "react-router-dom"
import AllPlayers from './components/AllPlayers'
import NewPlayers from './components/NewPlayersForm'
import Home from './components/Home'
import { useEffect } from 'react'
import NavBar from './components/NavBar'


function App() {
const navigate = useNavigate();


useEffect(() => {
  navigate("/home")
}, []);

  return (
    <>
  <div id="container">
      <div id="main-section">
        <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />

        <Route path="/allplayers" element={<AllPlayers />} />

        <Route path="/newplayers" element={<NewPlayers />} />
      </Routes>
      </div>
    </div>
    </>
  )
}

export default App
