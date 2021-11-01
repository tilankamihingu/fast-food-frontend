import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Offfer from './pages/Offers/Offfer';
import Bun from './pages/Bun/Bun';
import Pizza from './pages/Pizza/Pizza';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import { DataProvider } from './components/Context';

function App() {
  return (
    <Router>
    <DataProvider>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/menu'>
          <Products />
        </Route>
        <Route path='/offers'>
          <Offfer />
        </Route>
        <Route path="/buns">
          <Bun />
        </Route>
        <Route path="/pizza">
          <Pizza />
        </Route>
        <Route path="/details/:id">
          <ProductDetails />
        </Route>
      </Switch>
      <Footer />
    </div>
    </DataProvider>
    </Router>
  );
}

export default App;
