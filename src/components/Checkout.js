import React from "react";
import { useStateValue } from "../providers/StateProviders";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";
import Subtotal from './Subtotal'

function Checkout() {
  const [{ basket, user, dispatch }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">

      <h2 className="checkout__title">Your Shopping Cart</h2>

      {basket.map((item) => ( 
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating ={item.rating} />
          
        
  ))}
    </div>
    <div className="checkout__right">
      <Subtotal/>
    </div>
    </div>
    

  );
}

export default Checkout;
