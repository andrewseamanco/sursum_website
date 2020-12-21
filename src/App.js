import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import AboutSursum from './Pages/AboutSursum'
import Navbar from './Components/Navbar'
import ImageSlider from './Components/ImageSlider'
import Footer from './Pages/Footer'
import './App.css';


function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <ImageSlider />
      <AboutSursum />
      <Footer />
    </Router>
    </div>
  );
}

export default App;
