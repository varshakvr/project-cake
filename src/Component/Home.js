import React from 'react'
import style from "../Component/Css/home.module.css"
import first from "../Component/Images/Delicious1.gif"
import {Link} from "react-router-dom"
import cupcake from "../Component/Images/cupcake.jpg"
import wedding from "../Component/Images/wedding.jpg"
import piece from "../Component/Images/piece.jpg"
import chef from "../Component/Images/chef.webp"
import pic from './Images/2.png'

<style>
  @import url('https://fonts.googleapis.com/css2?family=Lugrasimo&family=Lumanosimo&display=swap');
</style>


function Home() {
  

function notify(){
  Notification.requestPermission().then(perm=>{
      if(perm==="granted"){ 
        new Notification("SCOOPER DOOPER",{
            body:"READY TO EAT SLICE OF HEAVEN"  ,
            icon: pic          
        })
      }
  })
}
window.addEventListener("load",notify)

  return (
    <>
    <div >
     <img src={first} className={style.container}/>
     
       <h1 className={style.h1}>WHAT WE OFFER</h1>
    <div className={style.seccontainer}>
    
     <div className={style.flex}>
      <img src={cupcake} className={style.logo} />
      <h1>CUP CAKE</h1>
      <p>We provide a variety of cupcakes for any party made with high-quality natural ingredients and no preservatives.</p>
      </div>
     

     <div className={style.flex}>
      <img src={wedding} className={style.logo} />
      <h1>WEDDING CAKE</h1>
      <p>Want to make your wedding unforgettable? Then you need to order a unique wedding cake at Sweet Bakery!</p>
      </div>
    

     <div className={style.flex}>
      <img src={piece} className={style.logo} />
      <h1 > ICE CAKE</h1>
      <p>Cake is for life, not just for birthdays!</p>
      </div>
     </div>
       <div className={style.parallex1}></div>
      <div className={style.chefcon}>
        <div className={style.text}>
            <h1>HOW WE <br></br>
              STARTED BAKING?</h1>
             <p > Our story began in 2010, when Varsha , the founder of Scooper Dooper, baked her fist cupcakes for sale and offered the bakery to the nearest shop.<br></br><br></br>
              The cakery was awesome and she was proposed to become a regular supplier of sweet bakery. Anna expanded the assortment and created promotional Instagram account.<br></br><br></br>
              Soon she decided to gather a team of like-minded people and start sher own sweet brand and open her own store. Dolcetti itself appeared in 2012 and has been successfully working and backing for you!</p>
             < Link to="/home" className={style.buy} >BUY NOW</Link> 
            </div>
          <div className={style.inner}>
           <img src={chef} className={style.inner} />
       </div>
       </div>
   
   <div className={style.gallery}>
    <h1>GALLERY</h1>
    <div className={style.slider}>
    </div>
   </div>
 
   
    </div>
    
    </>
  )
}

export default Home