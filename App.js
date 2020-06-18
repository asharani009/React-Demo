import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import Avatar from './Avatar';
import About from './About';
import Contact from './ContactUs';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>   
    <div className="App">
      <Menu/>
        <Switch>
          <Route path="/" exact component={Avatar} />
          <Route path="/About" component={About} />
          <Route path="/ContactUs" component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
