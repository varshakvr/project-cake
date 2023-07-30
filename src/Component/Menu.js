import React, { useEffect, useState } from "react";
import style from "../Component/Css/menu.module.css";
import { BsCartCheckFill} from "react-icons/bs";
import { useContext } from "react";
import { Mycontext } from "./Mycontext";
import Menudata from "./Product";


function Menu(){
    const {handleclick} =useContext(Mycontext);
    const[store,setstore]=useState(Menudata)
    const[f,setf]=useState(store)
    const[b,setb]=useState("") 
    
    const sample1=(x)=>{
      setb(x)
    }
    useEffect(()=>{
      setf(store.filter(i=>i.cat==b))
    },[b])



    const[n,setn]=useState("")
    
    const sample=(x)=>{
      setn(x)
    }
    useEffect(()=>{
     setf(store.filter(a=>a.name.toLowerCase().startsWith(n.toLowerCase())))

    },[n])
    
  
  
   


    return(
         <div className={style.container}>
         <div className={style.slider}>
           <div className={style.wrapper}>
          <div className={style.searchbox}>
             <input type="text" placeholder="Search Item Here" value={n} onChange={(e)=>sample(e.target.value)} className={style.inputbox}/>
          </div>
        </div>
        </div>
      
          <div className={style.bb}>
            <h1>Filter</h1>
          <button onClick={(e)=>sample1(e.target.value)} value="cup" className={style.button}>CUPCAKE</button>
            <button  onClick={(e)=>sample1(e.target.value)} value="wedding" className={style.button}>WEDDING</button>
            <button onClick={(e)=>sample1(e.target.value)}value="ice" className={style.button}>ICECAKE</button>
          
            </div>
       
      
    
        <h1 style={{textAlign:"center"}}>MENU</h1>
        <div className={style.flexcontainer}>
        {f.map(item => (
          <div className={style.flexitem}>
            
            <img src={item.Image} className={style.logo1} alt={item.name} />
            <h2 className={style.h3}>{item.name}-₹{item.price}</h2>
            <p>{item.p}</p>
           <button onClick={()=>handleclick(item)} >BUY <BsCartCheckFill/></button>
           
          </div>
        ))}
      </div>
      
    </div>
  );
}
export default Menu;