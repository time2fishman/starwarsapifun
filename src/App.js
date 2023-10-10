import React, { useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Results from './components/Results';
import './App.css';

function App() {
  // STATE
  const [characterBio, setCharcterBio] = useState();

  // FUNCTIONS
  const handleSubmit = (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();
    // Read the form data
    const form = e.target.name.value;
    // Make API call
    fetch(`https://swapi.py4e.com/api/people/?search=${form}`)
      // change API response to JSON format
      .then(response => response.json())
      // set state
      .then(data => setCharcterBio(data))
  }

  // JSX
  return (
    <div className='App'>
      <Header />
      <main>
        <Search handleSubmit={handleSubmit} setCharcterBio={setCharcterBio} />
        <Results characterBio={characterBio} />
      </main>
      <footer>
        <a href="https://www.freepik.com/free-photo/3d-hyperspace-background-with-warp-tunnel-effect_8879794.htm#query=star%20wars%20background&position=0&from_view=keyword&track=ais">Image by kjpargeter</a> on Freepik
      </footer>
    </div>
  )
}

export default App;
