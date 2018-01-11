import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import SuccessPage from './components/SuccessPage';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/form' component={ContactForm} />
          <Route exact path='/success' component={SuccessPage} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
