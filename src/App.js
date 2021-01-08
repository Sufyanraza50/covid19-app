import React, { useState } from 'react';
import Navbar from './components/Navbar';
import InfoPanal from './components/InfoPanal';
import './App.css';
import Footnav from './components/Footnav';

function App() {
  const screenConfig = useState(0);
  return (
    <div>
      <Navbar />
      <InfoPanal currentScreen={screenConfig[0]} />
      <Footnav screenConfig={screenConfig} />
    </div>
  );
}

export default App;
