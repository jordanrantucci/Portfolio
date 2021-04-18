import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Particles from 'react-particles-js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';


function App() {
  return (
    <BrowserRouter>
      <Particles
      className="particles-canvas"
        params={{
          particles: {
            line_linked: {
              shadow: {
                enable: true,
                color: "#FF8C00",
                blur: 1,
                opacity: 1,
                width: 100,
                distance: 1
              }
            },
            shape: {
              type: "square",
              stroke: {
                width:5,
                color: "#1E90FF"
              }
            },
            move: {
              speed: 1,
            }
          }
        }} />
    <Navbar />
    <Switch>
      <Route exact path ="/" component={Header}>
      </Route>
      <Route exact path ="/Portfolio" component={Portfolio}>
      </Route>
      <Route exact path="/AboutMe" component={AboutMe}>
      </Route>
      <Route exact path="/Contact" component={Contact}></Route>
    </Switch>
   </BrowserRouter>
  );
}

export default App;
