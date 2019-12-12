import React from 'react';
import Timer from './Timer';
import './App.css';
const time=6800000;
function App() {
  return (
      <Timer data={time}/>
  );
}

export default App;
