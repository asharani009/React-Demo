import React from 'react';
import Hero from './components/Hero_text';
import Header from './components/Header.js';
import Slider from './components/slider.js';
import Card from './components/card.js';
import Grid from './components/grid.js';
import Footer from './components/footer.js';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="container container_shadow">
        <div className="row">
          <div className="col">
           <Header/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col">
                <Hero/>
              </div>
            </div>
            <div className="row">
              <div className="col slider_bg">
                <Slider/>
              </div>
            </div> 
            <div className="row">
              <div className="col">
                <Card/>
              </div>
            </div> 
             <div className="row">
              <div className="col">
                <Grid/>
              </div>
            </div> 
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Footer/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
