import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Film from './pages/Film';
import Character from './pages/Character';
import logo from './assets/star-wars-logo2.png';

function App() {
  return (
    <Router>
      <div className='page-container'>
        <div className='content-wrap'>
          <header>
            <Link to='/'>
              <img src={logo} alt='logo' className='logo' />
            </Link>
          </header>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/film/:id' component={Film} />
            <Route path='/character/:id' component={Character} />
          </Switch>
        </div>
        <footer>by R. Raad 2020</footer>
      </div>
    </Router>
  );
}

export default App;
