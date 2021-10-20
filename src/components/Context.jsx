import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [buns, setBuns] = useState([
        {
            "_id":"1",
             "title": "Choco Smoothie",
             "images": "https://images.pexels.com/photos/6261272/pexels-photo-6261272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur quia delectus praesentium",
             "note": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
             "specialp": "buy 2 get 1 free",
             "price": 440.00,
        },
        {
            "_id":"2",
             "title": "Choco Smoothie",
             "images": "https://images.pexels.com/photos/6261272/pexels-photo-6261272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur quia delectus praesentium",
             "note": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
             "specialp": "buy 2 get 1 free",
             "price": 440.00,
        },
        {
            "_id":"3",
             "title": "Choco Smoothie",
             "images": "https://images.pexels.com/photos/6261272/pexels-photo-6261272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur quia delectus praesentium",
             "note": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
             "specialp": "buy 2 get 1 free",
             "price": 440.00,
        },
        {
            "_id":"4",
             "title": "Choco Smoothie",
             "images": "https://images.pexels.com/photos/6261272/pexels-photo-6261272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur quia delectus praesentium",
             "note": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
             "specialp": "buy 2 get 1 free",
             "price": 440.00,
        }
    ])

    const[pizzas, setPizzas] = useState([
        {
            "_id":"001",
             "title": "Choco Smoothie",
             "images": "https://images.pexels.com/photos/6261272/pexels-photo-6261272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur quia delectus praesentium",
             "note": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
             "specialp": "buy 2 get 1 free",
             "price": 440.00,
        },
        {
            "_id":"002",
             "title": "Choco Smoothie",
             "images": "https://images.pexels.com/photos/6261272/pexels-photo-6261272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur quia delectus praesentium",
             "note": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
             "specialp": "buy 2 get 1 free",
             "price": 440.00,
        },
        {
            "_id":"003",
             "title": "Choco Smoothie",
             "images": "https://images.pexels.com/photos/6261272/pexels-photo-6261272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur quia delectus praesentium",
             "note": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
             "specialp": "buy 2 get 1 free",
             "price": 440.00,
        },
        {
            "_id":"004",
             "title": "Choco Smoothie",
             "images": "https://images.pexels.com/photos/6261272/pexels-photo-6261272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur quia delectus praesentium",
             "note": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
             "specialp": "buy 2 get 1 free",
             "price": 440.00,
        }
    ])

    const value = {
        burger: [buns, setBuns],
        pizza: [pizzas, setPizzas]
    }

    return(
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}