import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import NavBar from "./components/NavBar"
import ContactForm from "./components/ContactForm"
import Home from './components/Home'
import Footer from './components/Footer'


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="ui container homeMargin">
          <Route exact path='/' component={Home} />
          <Route exact path='/form' component={ContactForm} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
