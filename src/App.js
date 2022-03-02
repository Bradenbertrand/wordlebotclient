import React, { useState, useEffect } from 'react';
import Tutorial from './Tutorial/Tutorial';
import PointsLeaderboard from './PointsLeaderboard/PointsLeaderboard';
import AvgLeaderboard from './AvgLeaderboard/AvgLeaderboard';
import HowItWorks from './HowItWorks/HowItWorks';
import './App.css';

function App() {
  const [state, setState] = useState({ leaderboard: 0 })

  function handleAvgLeaderboard() {
    setState({ leaderboard: 0 })
    console.log(state.leaderboard)
  }

  function handlePointsLeaderboard() {
    setState({ leaderboard: 1 })
    console.log(state.leaderboard)
  }


  return (
    <div className="App">
      <header className="header">
        <h1 className="headerText"><span className="greenText">Wordle</span>Bot Leaderboard</h1>
      </header>
      <div className="columnContainer">
        <div className="column">
          <div className="buttonContainer">
            <button className="leaderboardButton" onClick={handlePointsLeaderboard}>Points Leaderboard</button><button className="leaderboardButton" onClick={handleAvgLeaderboard}>Average Leaderboard</button>
          </div>
          {state.leaderboard === 0 ? <AvgLeaderboard /> : <PointsLeaderboard />}
        </div>
        <div className="column"><Tutorial /></div>
      </div>
      <HowItWorks />
    </div>
  );
}

export default App;


//                