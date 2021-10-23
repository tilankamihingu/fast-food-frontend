import React, {createContext, useState} from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {
    const[products, setProducts] = useState([
        {
            "_id":"1",
             "title": "Hamburger",
             "images": "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?cs=srgb&dl=pexels-valeria-boltneva-1639557.jpg&fm=jpg",
             "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur quia delectus praesentium",
             "note": "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
             "specialp": "buy 2 get 1 free",
             "price": 440.00,
         },
         {
             "_id": "2",
             "title": "Cheese Burger",
             "images": "https://images.pexels.com/photos/3052362/pexels-photo-3052362.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
             "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur quia delectus praesentium",
             "note": "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
             "specialp": "buy 2 get 1 free",
             "price": 260.00,

         },
         {
             "_id": "3",
             "title": "Chicken Burger",
             "images": "https://images.pexels.com/photos/6896379/pexels-photo-6896379.jpeg?cs=srgb&dl=pexels-eiliv-aceron-6896379.jpg&fm=jpg",
             "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur quia delectus praesentium",
             "note": "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
             "specialp": "buy 2 get 1 free",
             "price": 130.00,

         },
         {
             "_id": "4",
             "title": "Chicken Shawrma",
             "images": "https://images.pexels.com/photos/8018079/pexels-photo-8018079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur quia delectus praesentium",
             "note": "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
             "specialp": "buy 2 get 1 free",
             "price": 800.00,

         },
         {
             "_id": "5",
             "title":"Submarine",
             "images": "https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur quia delectus praesentium",
             "note": "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
             "specialp": "buy 2 get 1 free",
             "price": 320.00,

         },
         {
             "_id": "6",
             "title": "Sandwitch",
             "images": "https://images.pexels.com/photos/3609894/pexels-photo-3609894.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur quia delectus praesentium",
             "note": "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
             "specialp": "buy 2 get 1 free",
             "price": 280.00,

         }
    ])

    const [special, setSpecial] = useState([
        {
            "_id":"001",
             "title": "Cold Desert",
             "images": "https://images.pexels.com/photos/88917/pexels-photo-88917.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur quia delectus praesentium exercitationem nesciunt quos possimus, expedita nisi laboriosam molestias",
             "price": 870.00,
         },
         {
            "_id":"002",
             "title": "Vegetable Salad",
             "images": "https://images.pexels.com/photos/434258/pexels-photo-434258.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
             "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur quia delectus praesentium exercitationem nesciunt quos possimus, expedita nisi laboriosam molestias",
             "price": 650.00,

         },
         {
            "_id":"003",
             "title": "Spicy Salad",
             "images": "https://images.pexels.com/photos/4194625/pexels-photo-4194625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
             "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur quia delectus praesentium exercitationem nesciunt quos possimus, expedita nisi laboriosam molestias",
             "price": 400.00,

         }
    ])

    const value = {
        products: [products, setProducts],
        specials: [special, setSpecial]
    }

    return(
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}