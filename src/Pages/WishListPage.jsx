
import React from "react";
import "../Styles/wishlistPage.css";
import {WishList} from "../Components/WishList"



function WishListPage(){
    return( <div class="page-content">
    <h1>My Wishlist</h1>
    <div class="wishlist-container">
        <WishList/>
    </div>
    
</div>);
}

export {WishListPage};