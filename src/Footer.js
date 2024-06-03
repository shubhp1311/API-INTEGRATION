import React from 'react'
import "./Footer.css";
import img1 from "./images/logo192.png"

export default function Footer() {
  return (
    <div id='footer'>
      <footer>
        <img src={img1} alt='logo' height={50} width={50} style={{marginLeft:'20px',marginTop:'30px'}}/>
        <span style={{color:'#00BFFF',paddingLeft:'10px',position:'relative',top:'20px',fontWeight:'bolder'}}>Made By SHUBHAM...!</span>
        <span style={{color:'#00BFFF',paddingLeft:'700px',position:'relative',top:'20px',fontWeight:'bolder'}}>Copyright &copy; 2024 All Rights Reserved.</span>
      </footer>
      
    </div>
  )
}
