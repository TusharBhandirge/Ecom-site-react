

import React from 'react';


function Footer(){
    return(
    <footer>
        <footer className="footer">
            <div className="footer-heading "><h3>You can contact me on below links</h3></div>
           
            <div className="footer-links">
                <a className="link" href="https://www.linkedin.com/in/tushar-bhandirge-300249118/">
                    <img className="icon-image" src="../Image_resources/icons8-linkedin-30.png" />
                </a>
           
                <a className="link" href="https://twitter.com/TusharBhandirge?s=09">
                    <img className="icon-image" src="../Image_resources/icons8-twitter-30.png" />
                </a>
           
                <a className="link" href="https://github.com/TusharBhandirge?tab=repositories">
                    <img className="icon-image" src="../Image_resources/icons8-github-30.png"/>
                </a>
            </div>
               
        </footer>
    </footer>
    );
}

export {Footer};