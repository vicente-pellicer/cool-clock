import React from 'react';
import Background from './components/background';
import Clock from './components/clock';
import './App.css';

function App() {
  return (
    <div className="App">
      <Clock></Clock>
      <Background></Background>
    </div>
  );
}

export default App;
