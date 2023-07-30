import React from 'react'
import style from "../Component/Css/Cart.module.css"
import { useState } from 'react'
import {Link} from "react-router-dom"

function Cart({cart,setcart,price1} ) {
  //
   const deleteitem=(x)=>{
setcart(cart.filter(a=>a!=x))
 }

 //
const handleclick=(symbol,item)=>{
  setcart(cart.map(prod=>{
    if (prod.name == item.name){
      if (symbol == '+'){
        console.log(prod)
      return {...prod,count : prod.count + 1}
      } else if (symbol == '-'){
        console.log(prod)
        return {...prod,count : prod.count - 1}
      }
    }
    return prod
  }))
}

  return (
    <div className={style.screen}>
     <h1 className={style.h1}>CART ITEMS</h1>
    <div className={style.flexcontainer}>
    
    {cart.map(item=>(
      <>
         <div className={style.flexitem}>
           
            <img src={item.Image} className={style.logo1} alt={item.name} />
            <div className={style.details}>
           <p className={style.h3}>{item.name}₹{item.price}</p>
           
          
           <button value='-' className={style.button} onClick={(e)=>handleclick(e.target.value,item)}>-</button>
          
           <h1>{item.count  <1 ? 1 : item.count}</h1>
           
           <button value='+'   className={style.button} onClick={(e)=>handleclick(e.target.value,item)}>+</button>
            <button  className={style.deletebutton} onClick={()=>deleteitem(item)}>Delete</button>
            </div>
          </div>
         
         
      </>
    ))}
     <div className={style.price}>
    <p>TOTAL-₹{price1}</p> 

    < Link to="/menu"  className={style.link}>CONTINUE SHOPPING</Link>

    </div>  
    </div>
   
   

    </div>
  )
}

export default Cart;