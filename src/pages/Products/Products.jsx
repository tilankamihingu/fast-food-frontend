import React from 'react';
import './Products.css';
import Burger from '../../images/burger4.jpg';

const Products = () => {
    return (
        <div className="product-full">
           <div className="product-container">
               <div className="product-row">
                   <div className="product-card">
                        <img src={Burger} alt="" />
                       <div className="card-details">
                           <h2>Name</h2>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                       </div>
                   </div>
                   <div className="product-card">
                        <img src={Burger} alt="" />
                       <div className="card-details">
                           <h2>Name</h2>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                       </div>
                   </div>
                   <div className="product-card">
                        <img src={Burger} alt="" />
                       <div className="card-details">
                           <h2>Name</h2>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Products
