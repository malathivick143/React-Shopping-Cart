import React from 'react';

import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [])

  const addToCart = (item,quantity,size) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.pid === item.pid  && cartItem.size === size);
    console.log({isItemInCart})
    const filterdata=cartItems.filter((cartItem) => cartItem.pid=== item.pid && cartItem.size === item.size);
    
    let total = filterdata.reduce((count, item) => count + item.quantity, 0);
    // const quant=getUpdateQuantity(item,quantity,size);
    
 
    if (isItemInCart) {
    //   console.log("inside add if setcartitems ")
    //  console.log(quantity, total)
    //  total=(quantity+total);
    //  console.log( total)
    
setCartItems(
        
        cartItems.map((cartItem) =>
          cartItem.pid === item.pid  && cartItem.size === size 
 
           ? { ...cartItem,  quantity: cartItem.quantity + quantity  ,size }
            : cartItem
        )       
      );
    } else {
      console.log("outside else add setcartitems ")
      setCartItems([...cartItems, { ...item, quantity,size }]);
    }
  };

  const removeFromCart = (item,quantity,size) => {
   
    const isItemInCart = cartItems.find((cartItem) => cartItem.pid === item.pid && cartItem.size === item.size);
    

    if (isItemInCart) {
      console.log("inside if remove isitemincart");
      console.log(cartItems.filter((cartItem) => cartItem.pid!== item.pid || cartItem.size !== item.size));
        setCartItems(cartItems.filter((cartItem) => cartItem.pid !== item.pid ||cartItem.size !== item.size));    
      
    }
     else {
      console.log("inside else of remove isitemincart");
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.pid !== item.pid && cartItem.size !== item.size
            ? { ...cartItem, quantity: quantity ,size }
            : cartItem
           
        )
     
      );

    }
  };
 

  const removeFromCart1 = (item,size) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.pid === item.pid && cartItem.size !== item.size);
    

    if (item.quantity === 1) {
      console.log(item)
      setCartItems(cartItems.filter((cartItem) => cartItem.pid !== item.pid ||cartItem.size !== item.size));    
      // if the quantity of the item is 1, remove the item from the cart
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id && cartItem.size === size 
            ? { ...cartItem, quantity: cartItem.quantity - 1 } // if the quantity of the item is greater than 1, decrease the quantity of the item
            : cartItem
        )
      );
    }
  };
  

  // const getUpdateQuantity=(item,quantity,size) => {
  //   const isprodavail=cartItems.filter((cartItem) => cartItem.pid === item.pid  && cartItem.size === size)
  //   if(isprodavail)
  //   return cartItems.reduce((count, item) => 
  // (count,  quantity, item.quantity))
  
  // };  

  const clearCart = () => {
    setCartItems([]);
  };


  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.pprice * item.quantity, 0);
  };

  const getCartQuantity = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };


  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        getCartQuantity,
        removeFromCart1,
      
      }}
    >
      {children}
    </CartContext.Provider>
  );
};