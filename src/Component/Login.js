import React from 'react'
import style from './Css/Login.module.css'
import {Link} from 'react-router-dom'
function Login() {
  return (
    <div className={style.full}>
      <div className={style.wrapper}>
    <form action="#">
      <h2>Login</h2>
        <div className={style.inputfield}>
        <input type="text" required/>
        <label>Enter your email</label>
      </div>
      <div className={style.inputfield}>
        <input type="password" required/>
        <label>Enter your password</label>
      </div>
      <div className={style.forget}>
        <label for="remember">
          <input type="checkbox" id="remember"/>
          <p>Remember me</p>
        </label>
        <a href="#">Forgot password?</a>
      </div>
      <button className={style.button} type="submit">Log In</button>
      <div className={style.register}>
        <p>Don't have an account? < Link to="/menu" className={style.buy} >BUY NOW</Link> </p>
      </div>
    </form>
  </div></div>
  )
}

export default Login