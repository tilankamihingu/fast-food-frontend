import React, { useContext } from 'react';
import './Pizza.css';
import { DataContext } from '../../components/Context';
import { Link } from 'react-router-dom';

const Pizza = () => {
    const value = useContext(DataContext)
    const[specials] = value.specials
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
                       specials.map(pizza =>(
                        <div className="pizza-item-card">
                            <img src={pizza.images} alt="" />
                            <div className="pizza-item-details">
                                <h2>{pizza.title}</h2>
                                <p>{pizza.description}</p>
                                <h3>Rs.{pizza.price}</h3>
                                <Link to={`/details/${pizza._id}`}><button className="card-btn">View</button></Link>
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
