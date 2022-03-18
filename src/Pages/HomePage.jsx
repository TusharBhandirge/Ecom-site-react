
import React from 'react';
import { Banner } from '../Components/Banner';
import { Categories } from '../Components/Categories';
import { Trending } from '../Components/Trending';

import "../Styles/Common.css"



function HomePage(){
    return( 
       
       <> 
        <Categories />
        <Banner />
        <Trending/>
        
        </>
    );
}


export {HomePage};