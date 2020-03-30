import React from 'react';
import './App.css';
import UglyThings from "./UglyThings"
import {Switch, Route} from "react-router-dom"
import BeautyThings from "./BeautyThings"
import Navbar from "./Navbar"
import YourForm from "./YourForm"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={YourForm} />
        <Route path="/beauty" component={BeautyThings} />
        <Route path="/ugly" component={UglyThings} />
      </Switch>
    </div>
  );
}

export default App;

