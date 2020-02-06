import React, { Component } from "react";
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";
// import "./App.css";

import Add from "./Components/Add.js";
import Multiply from "./Components/Multiply.js";
import Subtract from "./Components/Subtract.js";
import Divide from "./Components/Divide.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <nav className="nav">
          <ul className="nav-lists">
            <li className="navList-items">
              <Link to="/add">Add</Link>
            </li>
            <li className="navList-items">
              <Link to="/subtract">Subtract</Link>
            </li>
            <li className="navList-items">
              <Link to="/multiply">Multiply</Link>
            </li>
            <li className="navList-items">
              <Link to="/divide">Divide</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/add">
            <Add operator="+" />
          </Route>
          <Route path="/subtract">
            <Subtract operator="-" />
          </Route>
          <Route path="/multiply">
            <Multiply operator="*" />
          </Route>
          <Route path="/divide">
            <Divide operator="/" />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
}

export default App;








