import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar.js';
import Filter from './components/filter.js';
import Buttons from './components/buttons.js';
import Cards from './components/card.js';

function App() {


  return (
    <div>
    <Navbar />

     <Filter />

     <Buttons />

     <Cards />
     <Cards />
     <Cards />
     </div>
  );
}

export default App;
