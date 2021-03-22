import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Gallery from './components/pages/Gallery';
import Products from './components/pages/Products';
import Aboutus from './components/pages/Aboutus';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/about_us' component={Aboutus} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
