import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AboutSursum from './Pages/AboutSursum'
import Navbar from './Components/Navbar'
import ImageSlider from './Components/ImageSlider'
import './App.css';
import Homepage from './Pages/Homepage'


function App() {
  return (
    <div>
    <Router>
      <Navbar/>
      <Route exact path='/'>
        <Homepage />
      </Route>
      <Route path='/about'>
        <AboutSursum/>
      </Route>
    </Router>
    </div>
  );
}

export default App;
