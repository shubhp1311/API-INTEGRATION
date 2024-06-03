import React from 'react'
import "./Home.css"
import img1 from "./images/react.jpg"
import Navbar from './Navbar'
import Footer from './Footer'
import Skills from './Skills'
import Cardarray from './Cardarray'
export default function Home() {
  return (
    <>
    <Navbar/>   
     
    <div id='home'>
        <div className='div1'>
            <h2 style={{paddingTop:'120px',textAlign:'center',color:'#00BFFF'}} className='ani'>Welcome!!</h2>
            <p style={{textAlign:'center',paddingTop:'20px'}}>I'm Interested In</p>
            <h2 style={{textAlign:'center',color:'#00BFFF'}} className='ani'>Front End Developer</h2>
            <p style={{textAlign:'center',paddingTop:'10px'}}>Specialize in <span style={{textAlign:'center',color:'#00BFFF'}}>"React Js"</span></p>
            
        </div>
        <div className='div2'>
            <img src={img1} alt='logo' height={400} width={500} style={{marginTop:'40px',marginLeft:'50px'}} className='h'/>
        </div>
      
    </div>
    <div className='tech'>
      <h1 style={{paddingTop:'20px'}}>Technical Skills</h1>
    </div>
    <div id='flex'>    
    {Cardarray.map((a)=>{
        return(
          <Skills l={a.logo} n={a.name} p={a.para} li={a.link}/>
        )
    })}
    </div>

    
    <Footer/>
    </>

  )
}
