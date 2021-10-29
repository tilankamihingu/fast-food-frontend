import React, { useContext } from 'react';
import './Pizza.css';
import Burger from '../../images/pizza2.jpg';
import { DataContext } from '../../components/Context';

const Pizza = () => {
    const value = useContext(DataContext)
    const[special] = value.special
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
                   {
                       special.map(pizza =>(
                        <div className="pizza-item-card">
                            <img src={pizza.images} alt="" />
                            <div className="pizza-item-details">
                                <h2>{pizza.title}</h2>
                                <p>{pizza.description}</p>
                                <h3>{pizza.price}</h3>
                            </div>
                        </div>
                       ))
                   }
                   
                   
               </div>
           </div>
        </div>
    )
}

export default Pizza
