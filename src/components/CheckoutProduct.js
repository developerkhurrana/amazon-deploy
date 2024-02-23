import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../providers/StateProviders";

function CheckoutProduct({id, image, title, price, rating, hideBtn}) {
  const [{ basket }, dispatch] = useStateValue();

  // Function to add the product to basket and update the state in local storage
  const removeFromBasket = () => {
    //item removal
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        

        {!hideBtn && (
          <button onClick={removeFromBasket}>Remove From Basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
