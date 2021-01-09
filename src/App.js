import Keyboard from "./Keyboard";
import Header from "./Header";
import Footer from "./Footer";

import './App.css';

export default function App() {
  return (
    <div className="wrapper">
      <Header/>
      
      <div className="keys-div">
        <Keyboard/>  
      </div>

      <Footer/>
    </div>
  )
}
