import "./App.css";

import {Header} from "./Components/Header"
import { Footer } from "./Components/Footer";
import {HomePage} from "./Pages/HomePage";
import {WishListPage} from "./Pages/WishListPage"
import "./Styles/Common.css"


function App() {
  return (
    <div className="App">
     
     <div className ="main-container">
      <Header/>
      {/* <HomePage/> */}
      <WishListPage/>
      <Footer/>
      </div>
    
    </div>
  );
}

export default App;
