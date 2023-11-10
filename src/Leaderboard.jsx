import React, { useState } from 'react';
import './index.css';
import Home from './home';
// vite.config.js
// export default {
//   optimizeDeps: {
//     include: ['dependency-name']
//   }
// }
function Leaderboard() {
  const [players, setPlayers] = useState([
    { name: 'Player 1', score: 50 },
    { name: 'Player 2', score: 30 },
    { name: 'Player 3', score: 40 },
    { name: 'Player 4', score: 20 },

    // add more players as needed
  ]);

  const renderLeaderboard = () => {
    // Sort players by score
    const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

    // Render sorted players as table rows
    return sortedPlayers.map((player, index) => (
      <>
      <Home/>
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{player.name}</td>
        <td>{player.score}</td>
      </tr>
      </>
    ));
  };

  return (
    <>
    <h1 className='ldb'>Leaderboard</h1>
    <div className="leader">
      
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {renderLeaderboard()}
        </tbody>
      </table>
    </div></>
  );
}

export default Leaderboard;