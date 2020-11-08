import React from "react";

import { useStateValue } from "../context/StateProvider";
import Button from "./Button";
import "../style/checkoutProduc.css";

function CheckoutProduct({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();
  const RemoveFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} />
      <div className="checoutProduct__info">
        <p className="checoutProduct__title">{title}</p>
        <p className="checoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>🌟</p>
            ))}
        </div>
        <Button title="Remove from Basket" onClick={RemoveFromBasket} />
      </div>
    </div>
  );
}

export default CheckoutProduct;
