import "./App.css";

import {Header} from "./Components/Header"
import { Footer } from "./Components/Footer";
import {HomePage} from "./Pages/HomePage";
import {WishListPage} from "./Pages/WishListPage"
import "./Styles/Common.css"
import { MyCartPage } from "./Pages/MyCartPage";


function App() {
  return (
    <div className="App">
     
     <div className ="main-container">
      <Header/>
      {/* <HomePage/> */}
      {/* <WishListPage/> */}
      <MyCartPage/>
      <Footer/>
      </div>
    
    </div>
  );
}

export default App;
