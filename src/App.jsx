import React from 'react';
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import {Switch, Route, Redirect} from 'react-router-dom';
import Footer from './Footer';

const  App = () => {
  return (
    <>
    <Navbar />
    <Switch>
      <Route path = "/home" component={Home} />
      <Route path = "/about" component={About} />
      <Route path = "/contact" component={Contact} />
      <Route path = "/" component={Home} />
      <Redirect to = "/"/>
    </Switch>
    <Footer/>
  </>
  );
}

export default App;
