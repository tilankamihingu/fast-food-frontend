import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/products'>
          <Products />
        </Route>
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
