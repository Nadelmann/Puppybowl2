
import './App.css'
import {Routes, Route} from "react-router-dom"
import allPlayers from "./components/allPlayers"
import newPlayers from "./components/NewPlayersForm"

function App() {


  return (
    <>
  <div id="container">
      <div id="main-section">
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
