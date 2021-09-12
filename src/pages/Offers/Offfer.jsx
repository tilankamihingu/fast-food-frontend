import React from 'react';
import './Offer.css';
import Off1 from '../../images/salad.jpg';

const Offfer = () => {
    return (
        <div className="offer-full">
           <div className="offer-container">
               <div className="offer-row">
                   <div className="offer-card">
                       <img src={Off1} alt="" />
                       <div className="offer-details">
                           <h1>Biriyani with coke</h1>
                           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime enim repellat tempore ipsam odio perferendis!</p>
                           
                       </div>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Offfer
