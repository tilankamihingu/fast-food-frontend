import React from 'react';
import './Bun.css';
import Burger from '../../images/ban5.jpg';

const Bun = () => {
    return (
        <div className="bun-full">
           <div className="bun-container">
                <div className="bun-head">
                   <h1>Search Items</h1>
                   <div className="input-area">
                        <input type="text" placeholder="search items" />
                        <button>Search</button>
                   </div>
                </div>
               <div className="bun-row">
                   <div className="bun-card">
                        <img src={Burger} alt="" />
                       <div className="bun-details">
                           <h2>Bun Items</h2>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                           <h3>RS.600.00</h3>
                       </div>
                   </div>
                   <div className="bun-card">
                        <img src={Burger} alt="" />
                       <div className="bun-details">
                           <h2>Bun Items</h2>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                           <h3>RS.600.00</h3>
                       </div>
                   </div>
                   <div className="bun-card">
                        <img src={Burger} alt="" />
                       <div className="bun-details">
                           <h2>Bun Items</h2>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                           <h3>RS.600.00</h3>
                       </div>
                   </div>
                   <div className="bun-card">
                        <img src={Burger} alt="" />
                       <div className="bun-details">
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

export default Bun
