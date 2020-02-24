import React from 'react'
import Animals from "./Animals.js"
import animalList from "./animalList"
// import logo from './logo.svg';
import './App.css';

function App() {
  const allAnimals = animalList.map(list => <Animals key={list.id} list={list} />)
  return (
    <div>
      {allAnimals}
    </div>
  );
}

export default App;
