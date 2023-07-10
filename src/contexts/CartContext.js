import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const addToCart = (product, id) => {
    const newItem = { ...product, quantity: 1 }
    //check if  item is already in the cart or not 
    const cartItem = cart.find(item => item.id === id);
    //if cart item is already in the cart
    if (cartItem) {
      const newCart = [...cart]?.map(item=> {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 }
        }else{
          return item ;
        }
      });
      setCart(newCart);
    }else{
      setCart([...cart , newItem])
    }
  }

  const removeFromCart =(id)=>{
      const newCart = cart.filter((item)=> item.id !== id);
      setCart(newCart);
  }
  console.log(cart);

  return <CartContext.Provider value={{ cart ,addToCart ,removeFromCart }}>{children}</CartContext.Provider>;
};

export default CartProvider;
