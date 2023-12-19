import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Header from "./component/Header/Header"
import './style.css'
import { useState } from "react";

function App() {
  const [cartData, setCartData] = useState([])

  const buyFunc = (obj) => {
    const idx = cartData.findIndex(item =>{
      return obj.id == item.id
    });

if(idx > -1){
  cartData[idx].count =  cartData[idx].count + 1;
  setCartData([...cartData]);
} else{
  setCartData([{
    ...obj,
    count:1,
  }, ...cartData])
}

  
  }
  return (
    <BrowserRouter>
    <Header />

    <Routes>
    <Route path={'/'} element={<Home buyFunc={item} />} />
    <Route path='/cart' element={<Cart />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
