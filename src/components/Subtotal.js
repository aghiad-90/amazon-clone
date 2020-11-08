import React from "react";

import "../style/subtotal.css";
import Button from "./Button";
import CurrencyFormat from "react-currency-format";

import { useStateValue } from "../context/StateProvider";
import { getTotal } from "../context/reducer";

function Subtotal() {
  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      <h2>SubTotal</h2>
      <CurrencyFormat
        renderText={(value) => (
          <React.Fragment>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </React.Fragment>
        )}
        decimalScale={2}
        value={getTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <Button title="Proceed To Checkout" bold={true} />
    </div>
  );
}

export default Subtotal;
