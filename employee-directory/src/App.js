import React from 'react';
import logo from './logo.svg';
import Employees from './components/Employees/Employees';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Buttons from './components/Buttons/Buttons';
import Search from './components/Search/Search';


function App() {


  return (
    <div className="App">
      <Navbar />
      <Search />
      <Buttons />
      <Employees />
    </div>
  );
}

export default App;
