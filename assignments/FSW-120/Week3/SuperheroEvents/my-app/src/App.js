import React from 'react';
import Superhero from "./Superhero"
import superheroes from "./superheroes"
import './index.css';

function App() {
  const heroList = superheroes.map(list => <Superhero key={list.id} list={list}/>)
  return (
    <div className="App">
      {heroList}      
    </div>
  );
}

export default App;
