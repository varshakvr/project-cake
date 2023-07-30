import React from "react";
import logo1  from "./Images/2.png"
import { Link } from "react-router-dom";
import style from "../Component/Css/Nav.module.css"
import { BsPersonCircle } from "react-icons/bs";
function Navbar({cart}){
    return(
       <>
       <div className={style.container}>
        <div className={style.imagecontainer}>
            <img src={logo1} className={style.logo}/>
        </div>
        <div className={style.navlink}>
                        <Link exact to="/project-cake/" className={style.listitem} >HOME</Link> 
                        <Link to="/menu" className={style.listitem} >MENU</Link> 
                        <div className={style.cartno}>
                            <Link to="/cart" className={style.listitem} >CART</Link> 
                            <span>{cart.length}</span>
                        </div>   
                        <Link to="/login" className={style.listitem}><BsPersonCircle className={style.BsPersonCircle}/></Link>
        </div>
       </div>
       </>
        );
}
export default Navbar;