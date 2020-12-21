import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import './App.css';

import AboutSursum from './Pages/AboutSursum'
import Homepage from './Pages/Homepage'
import Placements from './Pages/Placements'


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
      <Route path='/placements'>
        <Placements />
      </Route>
    </Router>
    </div>
  );
}

export default App;
