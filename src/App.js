import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';


function App() {
  return (
    <BrowserRouter>
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
