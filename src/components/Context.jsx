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
             "price": 540.00,
         },
         {
             "_id": "2",
             "title": "Cheese Burger",
             "images": "https://images.pexels.com/photos/3052362/pexels-photo-3052362.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
             "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur quia delectus praesentium",
             "note": "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
             "specialp": "buy 2 get soft drink",
             "price": 460.00,

         },
         {
             "_id": "3",
             "title": "Chicken Burger",
             "images": "https://images.pexels.com/photos/6896379/pexels-photo-6896379.jpeg?cs=srgb&dl=pexels-eiliv-aceron-6896379.jpg&fm=jpg",
             "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur quia delectus praesentium",
             "note": "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
             "specialp": "no offer",
             "price": 330.00,

         },
         {
             "_id": "4",
             "title": "Chicken Shawrma",
             "images": "https://images.pexels.com/photos/8018079/pexels-photo-8018079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur quia delectus praesentium",
             "note": "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
             "specialp": "buy 2 get 1 free",
             "price": 600.00,

         },
         {
             "_id": "5",
             "title":"Submarine",
             "images": "https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur quia delectus praesentium",
             "note": "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
             "specialp": "buy 2 get 1 free",
             "price": 1320.00,

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

    const [specials, setSpecials] = useState([
        {
            "_id":"001",
             "title": "Pepproni Pizza",
             "images": "https://images.pexels.com/photos/803290/pexels-photo-803290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
             "price": 1870.00,
         },
         {
            "_id":"002",
             "title": "Cheese Pizza",
             "images": "https://images.pexels.com/photos/2741457/pexels-photo-2741457.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
             "price": 2150.00,

         },
         {
            "_id":"003",
             "title": "Chicken Pizza",
             "images": "https://images.pexels.com/photos/1049620/pexels-photo-1049620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
             "price": 1400.00,

         }
    ])

    const value = {
        products: [products, setProducts],
        specials: [specials, setSpecials]
    }

    return(
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}