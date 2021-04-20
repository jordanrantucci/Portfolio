import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import { HashRouter, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';


function App() {
  return (
    <>
    <Navbar />
    <HashRouter basename='/'>
      <Route exact path ="/" component={Header}/>
      <Route path ="/Portfolio_React" component={Portfolio}/>
      <Route path="/AboutMe_React" component={AboutMe}/>
      <Route path="/Contact_React" component={Contact}/>
   </HashRouter>
   </>
  );
}

export default App;
