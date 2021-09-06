import React from 'react';
import './Home.css';


const Home = () => {
    return (
        <div className='full'>
            <div className="home-container">
                <div className="home-content">
                    <h1>Fast food Paradize</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident<br /> itaque sit nostrum impedit unde illum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, libero?</p>
                    <div className="content-btn">
                        <button className="view">View Menu</button>
                        <button className="order">Order Now</button>
                    </div>
                </div>
            </div>
            <div className="pizza-container">
                <div className="pizza-content">
                    <h1>Sri Lankan Special Pizza</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis<br /> quod quibusdam officiis corporis suscipit neque architecto totam dolorem laborum est!</p>
                    <div className="pizza-btn">
                        <button className="pizza-view">View Menu</button>
                        <button className="pizza-order">Order Now</button>
                    </div>
                </div>
            </div>
            <div className="about-container">
                <div className="about-content">
                    <h1>About our PARADIZE</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam<br /> doloribus quae nulla magni assumenda optio quas dolorum in odit nobis.<br /> Delectus dignissimos alias id numquam sint, sapiente saepe cum neque.</p>
                    <div className="about-btn">
                        <button className="about-direct">Direction</button>
                    </div>
                </div>
                <div className="about-icons">
                    
                </div>
            </div>
        </div>
    )
}

export default Home
