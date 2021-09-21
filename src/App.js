import React from 'react';
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
        <h1>Yusuf HAYIRLI</h1>
        <Navbar/>
        <Switch>
          <Route path='/' exact />''
        </Switch>
    </Router>
    </>
  );
}

export default App;
