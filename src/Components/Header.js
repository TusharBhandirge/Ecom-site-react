
import "../Styles/Common.css"
import React from 'react';


function Header(){
    return(<section class="header-section">
        <h1>knuckleball</h1>
        <input type="text" name="" id="" className="searchbar" placeholder="search" />

        <div className="header-action-div">
            <div className="button-badge">
                <i className="material-icons">insert_invitation</i>
                <div className="badge">2</div>
            </div>
          
          <div className="button-badge">
                <i className="material-icons">insert_invitation</i>
                <div className="badge">1</div>
            </div>

            <p>Cart</p>
        </div>

    </section>);
}

export {Header};