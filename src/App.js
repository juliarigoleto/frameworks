import React, { useState } from 'react';
import Header from './components/header';
import TeamDetails from './components/teamDetails';
import './App.css';

function App() {
  const [selectedTeam, setSelectedTeam] = useState(null);

  return (
    <div className="container">
    <div className="App">
      {selectedTeam && <TeamDetails team={selectedTeam} />}
      <Header setSelectedTeam={setSelectedTeam} />
    </div>
    </div>
  );
}

export default App;

