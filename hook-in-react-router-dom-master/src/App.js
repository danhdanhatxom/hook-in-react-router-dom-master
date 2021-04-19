import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import Detail from "./components/Detail";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/detail/:id" exact component={Detail} />
        </Switch>
      </Router>
    </div>
  );
}
