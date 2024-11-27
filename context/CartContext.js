import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
            if (existingItem) {
                return prevCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            }
            return [...prevCart, { ...item, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== id));
    };

    const updateQuantity = (id, quantity) => {
        setCart((prevCart) =>
            prevCart.map((cartItem) =>
                cartItem.id === id ? { ...cartItem, quantity } : cartItem
            )
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    const totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, totalCost }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
