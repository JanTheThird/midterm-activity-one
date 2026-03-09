import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage'; 
import Students from './Pages/Students'; 
import About from './Pages/About';


function App() {
  return (
    <div className="App">
      <NavBar /> 
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/students" element={<Students />} />
        <Route path="/about" element={<About />} /> 
      </Routes>
    </div>
  );
}

export default App;
