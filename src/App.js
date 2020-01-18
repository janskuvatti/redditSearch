import React, {useState} from 'react';
import Navigation from './components/Nav'
import './App.css';
import Search from './components/Search'
const App = () => {


  return (
    <div className="App">
<header className="App-header">
<Navigation />

      </header>
    <Search />
    </div>
  );
}

export default App;
