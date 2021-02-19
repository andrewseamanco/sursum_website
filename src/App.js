import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import './App.css';

import Homepage from './Pages/Homepage'
import Events from './Pages/Events'
import Join from './Pages/Join'
import Contact from './Pages/Contact'

function App() {
  return (
    <div>
    <Router>
      <Navbar/>
      <Route exact path='/'>
        <Homepage />
      </Route>
      <Route path='/events'>
        <Events />
      </Route>
      <Route path='/join'>
        <Join />
      </Route>
      <Route path='/contact'>
        <Contact />
      </Route>
    </Router>
    </div>
  );
}

export default App;
