import React from "react";
import { CartItems } from "../Components/CartItems";
import { Invoice } from "../Components/Invoice";
import "../Styles/myCart.css";

function MyCartPage() {
  return (
    <>
      <div class="page-content" style={{ flexDirection: "row" }}>
        <CartItems/>
        <Invoice/>
      </div>
    </>
  );
}

export { MyCartPage };
