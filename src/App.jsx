import React from 'react';
import { BrowserRouter ,Switch,Route,Link } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className='container'>
    <BrowserRouter forceRefresh={true}>
     
      <div className="navbar">
        
          <nav >
            <ul className='links'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to ="/contact">Contacts</Link></li>
              <li><Link to="/contact/formal">formal</Link></li>
              <li><Link to ="/contact/socialLink">informal</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/header" ><Header /></Route>
            <Route path ="/about" ><About  /></Route>
            <Route path="/contact"><Contact /></Route>
            <Route path="/contact/:type"><Contact /></Route>
          </Switch>
      </div>
     
    </BrowserRouter>
    </div>
  );
}

export default App;
