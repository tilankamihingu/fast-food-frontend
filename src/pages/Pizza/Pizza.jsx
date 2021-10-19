import React from 'react';
import './Pizza.css';
import Burger from '../../images/pizza2.jpg';

const Pizza = () => {
    return (
        <div className="pizza-item-full">
           <div className="pizza-item-container">
                <div className="pizza-item-head">
                   <h1>Search Items</h1>
                   <div className="input-area">
                        <input type="text" placeholder="search items" />
                        <button>Search</button>
                   </div>
                </div>
               <div className="pizza-item-row">
                   <div className="pizza-item-card">
                        <img src={Burger} alt="" />
                       <div className="pizza-item-details">
                           <h2>Bun Items</h2>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                           <h3>RS.600.00</h3>
                       </div>
                   </div>
                   
               </div>
           </div>
        </div>
    )
}

export default Pizza
