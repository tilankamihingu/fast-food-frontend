import React from 'react';
import './Offer.css';
import Off1 from '../../images/din.jpg';

const Offfer = () => {
    return (
        <div className="offer-full">
           <div className="offer-container">
               <div className="offer-row">
                   <div className="offer-card">
                       <img src={Off1} alt="" />
                       <div className="offer-details">
                           <h1>Special Dinner Package</h1>
                           <ul>
                               <li>Large Biriyani : Rs.2800.00</li>
                               <li>Black chicken Pizza : Rs.1400.00</li>
                               <li>Extra Large Thai Kottu: Rs.2000.00</li>
                               <li>Four Soft Drinks: Rs.800.00</li>
                           </ul>
                           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime enim repellat tempore ipsam odio perferendis!</p>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Offfer
