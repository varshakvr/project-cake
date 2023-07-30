import React,{useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";
import Home from './Component/Home';
import Menu from "./Component/Menu";
import Cart from "./Component/Cart";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Login from "./Component/Login";
import { Mycontext } from "./Component/Mycontext";

function App(){
    
  const[cart,setcart]=useState([])
  const[price1,setprice]=useState(0)
useEffect(() => {
    // Calculate total price whenever cart changes
    const calculateTotalPrice = () => {
      var total = 0;
      cart.forEach(item => {
        total = total + item.price * item.count;
      });
      return total;
    };

    // Update the price1 state with the calculated total price
    setprice(calculateTotalPrice());
  }, [cart]);
  
  
  const handleclick=(item)=>{
    const itemexits=cart.some(i=>i.name===item.name);
    if(!itemexits){
setcart([...cart,item]);
    }
    
   
    
  }

 

  
    

  return(
    <>
  <Mycontext.Provider value={{handleclick}}>
  <Navbar cart={cart}/>
  <Routes>
  <Route exact path="/" element={<Home/>}/>
  <Route path="/menu" element={<Menu/>}/>
  <Route path="/cart" element={<Cart cart={cart} setcart={setcart} price1={price1} />}/>
  <Route path="/login" element={<Login/>}/>
  </Routes>
  <Footer/>
  </Mycontext.Provider>
    </>
  )
}
export default App;