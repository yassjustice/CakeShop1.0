// src/context/CategoryContext.js

import React, { createContext, useContext, useState } from "react";

// Create the context
const CategoryContext = createContext();

// Create a provider component
export const CategoryProvider = ({ children }) => {
    const [categories, setCategories] = useState([
        {
            id: 1,
            title: "Pâtisserie grand format",
            description: "Celebrate your day!",
            image: require("../assets/birthday-cake.jpg"),
        },
        {
            id: 2,
            title: "Pâtisserie grand format1",
            description: "Celebrate your day!",
            image: require("../assets/weddingCaki.jpeg"),
        },
        {
            id: 3,
            title: "Pâtisserie grand format2",
            description: "Celebrate your day!",
            image: require("../assets/wedding-cake.jpg"),
        },
        {
            id: 4,
            title: "Pâtisserie grand format3",
            description: "Celebrate your day!",
            image: require("../assets/special-occasion-cake.jpg"),
        },
        {
            id: 5,
            title: "Pâtisserie grand format4",
            description: "Celebrate your day!",
            image: require("../assets/cupcakes.jpg"),
        },
        {
            id: 6,
            title: "Pâtisserie grand format5",
            description: "Celebrate your day!",
            image: require("../assets/cakeBig.jpeg"),
        },
        // Add more categories as needed
    ]);

    return (
        <CategoryContext.Provider value={{ categories, setCategories }}>
            {children}
        </CategoryContext.Provider>
    );
};

// Hook to use the context
export const useCategoryContext = () => {
    return useContext(CategoryContext);
};
