import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './Components/Navbar'
import ImageSlider from './Components/ImageSlider'
import './App.css';

function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <ImageSlider />
    </Router>
    </div>
  );
}

export default App;
