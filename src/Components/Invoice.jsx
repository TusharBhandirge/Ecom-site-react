
import React from "react";

function Invoice(){
    return( <div className="invoice" style={{alignSelf : "flex-start"}}> 
    <h2>Price Details</h2>

    <div className="invoice-item">
      <span>Price(2 items)</span> <span>4999$</span>
    </div>
    <div className="invoice-item">
      <span>Dicount</span> <span>-1999$</span>
    </div>
    <div className="invoice-item">
      <span>Delivery Charges</span> <span>499$</span>
    </div>

    <div className="invoice-item final-amt">
      <span>Total Amount</span> <span>3499$</span>
    </div>

    <span>You will save 1999$ on this order</span>

    <button className="product-card-btn">Place Order</button>
  </div>);
}

export {Invoice};