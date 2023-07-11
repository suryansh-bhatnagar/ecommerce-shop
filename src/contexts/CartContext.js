import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  const [itemsQuantity, setitemsQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);


  //update item Quantity

  useEffect(() => {
  if(cart.length){
    const quantity = cart.reduce((accumulator , currentItem)=> accumulator + currentItem.quantity , 0);
    setitemsQuantity(quantity)
  }else{
    setitemsQuantity(0)
  }
  }, [cart,setCart])

  // calculate total price
  useEffect(() => {
  if(cart.length){
    const total = cart.reduce((accumulator , currentItem)=> accumulator +(currentItem.price * currentItem.quantity) , 0);
    setTotalPrice(total)
  }else{
    setTotalPrice(0);
  }
  }, [cart,setCart])
  

  const addToCart = (product, id) => {
    const newItem = { ...product, quantity: 1 }
    //check if  item is already in the cart or not 
    const cartItem = cart.find(item => item.id === id);
    //if cart item is already in the cart
    if (cartItem) {
      const newCart = cart.map(item=> {
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

  const clearCart =()=> {
      setCart([])
  }

  const increaseQuantity =(id)=>{
    const cartItem = cart.find(item => item.id === id);
    if(cartItem){
     const newCart =  cart.map((item)=>{
        if(item.id === id){
            return {...item , quantity: item.quantity + 1};
        }else{
          return item;
        }
      });
      setCart(newCart);
    }

  }
  const decreaseQuantity =(id)=>{
    const cartItem = cart.find(item => item.id === id);
    if(cartItem){
     const newCart =  cart.map((item)=>{
        if(item.id === id ){
            return {...item , quantity: item.quantity - 1};
        }else{
          return item;
        }
      });
      setCart(newCart);
    }
    if(cartItem.quantity < 2){
      removeFromCart(id);
    }
  }

  console.log(cart);

  return <CartContext.Provider value={{ cart ,addToCart ,removeFromCart ,clearCart,increaseQuantity,decreaseQuantity,itemsQuantity,setitemsQuantity,totalPrice,setTotalPrice}}>{children}</CartContext.Provider>;
};

export default CartProvider;
