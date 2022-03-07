import './App.css';
import Appbar from './components/Appbar';
import React from 'react';
import Patient from './components/Patient';


 
function App() {
  return (
    <div className="App">
      <Appbar/>
      <Patient/>
    </div>
  );
}

export default App;
