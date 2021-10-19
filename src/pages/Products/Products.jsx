import React from 'react';
import './Products.css';
import { Link } from 'react-router-dom';
import Burger from '../../images/burger1.jpg';
import Pizza from '../../images/pizza1.jpg';
import Chicken from '../../images/chicken.jpg';
import Biriyani from '../../images/biriyani.jpg';

const Products = () => {
    return (
        <div className="product-full">
           <div className="product-container">
               <div className="product-head">
                   <h1>Categories</h1>
                   <div className="input-area">
                        <input type="text" placeholder="search category" />
                        <button>Search</button>
                   </div>
               </div>
               <div className="product-row">
                   <div className="product-card">
                        <img src={Burger} alt="" />
                       <div className="card-details">
                           <h2>Bun Items</h2>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                           <Link to = "/buns"><button className="find-items">view</button></Link>
                       </div>
                   </div>
                   <div className="product-card">
                        <img src={Pizza} alt="" />
                       <div className="card-details">
                           <h2>Pizza</h2>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                           <Link to = "/pizza"><button className="find-items">view</button></Link>
                       </div>
                   </div>
                   <div className="product-card">
                        <img src={Chicken} alt="" />
                       <div className="card-details">
                           <h2>Chicken Items</h2>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                           <Link to = "/chicken"><button className="find-items">view</button></Link>
                       </div>
                   </div>
                   <div className="product-card">
                        <img src={Biriyani} alt="" />
                       <div className="card-details">
                           <h2>Biriyani Items</h2>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                           <Link to = "/biriyani"><button className="find-items">view</button></Link>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Products
