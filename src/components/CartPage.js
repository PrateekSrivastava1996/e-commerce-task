import React, { useEffect, useState } from 'react';

const CartPage = () => {
     const [cartItems, setcartItems] = useState([])

     const removeFromCart = (id) => {

     }
     useEffect(() => {
          let data = JSON.parse(localStorage.getItem("cart-items"))
          console.log(data, "::::")
          setcartItems(data)
     }, [])
     return (
          <div>
               <h1>Cart</h1>
               {cartItems?.length === 0 ? (
                    <p>Your cart is empty.</p>
               ) : (
                    <ul>
                         {cartItems && cartItems?.length > 0 && cartItems?.map((item) => (
                              <li key={item.id}>
                                   <span>{item.name}</span>
                                   <span>{item.price}</span>
                                   {/* <button onClick={() => removeFromCart(item.id)}>Remove</button> */}
                              </li>
                         ))}
                    </ul>
               )}
          </div>
     );
};

export default CartPage;
