import React from 'react';
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//<Navbar/>
function App() {
  return (
    <>
    <Router>
      <div>
      <h1>
        <a href="#" class="neon-button">Yusuf HAYIRLI</a>
      </h1>
      </div>
      <Switch>
        <Route path='/' exact />''
      </Switch>
    </Router>
    </>
  );
}

export default App;
