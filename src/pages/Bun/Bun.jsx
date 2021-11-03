import React, { useContext } from 'react';
import { DataContext } from '../../components/Context';
import './Bun.css';
import { Link } from 'react-router-dom';

export default function Bun() {
    const value = useContext(DataContext)
    const [products] = value.products

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
                   {
                       products.map(product => (
                        <div className="bun-card" key={product._id}> 
                            <img src={product.images} alt="" />
                            <div className="bun-details">
                                <h2>{product.title}</h2>
                                <p>{product.note}</p>
                                <h3>Rs.{product.price}</h3>
                                <Link to={`/details/${product._id}`}><button className="card-btn">View</button></Link>
                            </div>
                        </div>
                       ))
                   }
               </div>
           </div>
        </div>
    )
}
