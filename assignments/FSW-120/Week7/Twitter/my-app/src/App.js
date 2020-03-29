import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./Home"
import Contact from "./Contact"
import About from "./About"
import "./index.css"
import Detail from "./Detail"


function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/detail" component={Detail} />
      </Switch>
    </div>
  );
}

export default App;
