import React from 'react';
import logo from './logo.png';
import './App.css';
import AboutMe from './components/AboutMe.jsx';

function App() {
  return (
    <div className="App">
      <AboutMe/>
      <header className="Blue">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi, my name is Jen Kim and this is my site :D
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
