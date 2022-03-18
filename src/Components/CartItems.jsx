import React from "react";


function CartItems(){
    return(  <div className="ItemsInCart"
    style={{ display: "flex", flexDirection: "column", gap : "1rem" }}
  >
    <div className="horizontal-card">
      <img src="https://picsum.photos/308/390" alt="" srcset="" />
      <div className="card-content">
        <span className="product-name">product name</span>
        <h2 className="product-card-amount">XXXX$</h2>

        <div className="quantity-div">
          <span>Quantity :</span>
          <button className="increase-qty-btn">-</button>
          <input type="number" name="" id="" value="0" />
          <button className="decrease-qty-btn">+</button>
        </div>

        <div className="card-btn">
          <button className="product-card-btn">Move to cart</button>
          <button className="product-card-btn">Move to wishlist</button>
        </div>
      </div>
    </div>

    <div className="horizontal-card">
      <img src="https://picsum.photos/308/390" alt="" srcset="" />
      <div className="card-content">
        <span className="product-name">product name</span>
        <h2 className="product-card-amount">XXXX$</h2>

        <div className="quantity-div">
          <span>Quantity :</span>
          <button className="increase-qty-btn">-</button>
          <input type="number" name="" id="" value="0" />
          <button className="decrease-qty-btn">+</button>
        </div>

        <div className="card-btn">
          <button className="product-card-btn">Move to cart</button>
          <button className="product-card-btn">Move to wishlist</button>
        </div>
      </div>
    </div>


  </div>);
}

export {CartItems}