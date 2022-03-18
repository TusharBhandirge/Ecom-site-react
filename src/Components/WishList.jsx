import React from "react";

const myWishlist =[ {
                        image : "https://picsum.photos/300/375",
                        productName : "Product name",
                        amount : "XXXX$",
                    },
                    {
                        image : "https://picsum.photos/300/375",
                        productName : "Product name",
                        amount : "XXXX$",
                    },
                    {
                        image : "https://picsum.photos/300/375",
                        productName : "Product name",
                        amount : "XXXX$",
                    },
                    {
                        image : "https://picsum.photos/300/375",
                        productName : "Product name",
                        amount : "XXXX$",
                    },
                    {
                        image : "https://picsum.photos/300/375",
                        productName : "Product name",
                        amount : "XXXX$",
                    }

                
                ];


function WishList(){
    return(

        <>
             
            {myWishlist.map(item=>(
                <div class="product-card">
                <img src={item.image} alt="" srcset="" class="product-img"/>
                <span class="product-name">{item.productName}</span>
                <h2 class="product-card-amount">{item.amount}</h2>
                <button class="product-card-btn">
                    Move to cart
                </button>
            </div>

            ))}
           
        </>
    );
}

export {WishList};