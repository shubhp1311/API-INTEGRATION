import React, { useState } from 'react'
import "./Clock.css"
import Navbar from './Navbar'
import Footer from './Footer'

export default function Clock() {
    let d=new Date().toLocaleDateString();
    const[a,abc]=useState(d);

    let t=new Date().toLocaleTimeString();
    const[b,def]=useState(t);

    let t1=new Date().getHours();
    let m=""


    let  xyz=()=>{
        let date=new Date().toLocaleDateString();
        abc(date);
    }
    setInterval(xyz,1000);

    let  pqr=()=>{
        let time=new Date().toLocaleTimeString();
        def(time);
    }
    setInterval(pqr,1000);

    if(t1>=1 && t1<=12)
    {
   m="good morning";
   
    }
    else if(t1>12 && t1<16)
    {
   m="good afternoon";
  
    }
    else if(t1>=17 && t1<21)
    {
   m="good evening";
   
    }
    else
    {
      m="good night"
    }

    

  return (

    <>
    <Navbar/>
        <div id='clock'>
            <h1 style={{textAlign:'center',position:'relative',top:'160px'}}>Digital Clock</h1>
            <div className='clock1'>
                <h1 style={{textAlign:'center'}}>{a}</h1>
                <h1 style={{textAlign:'center'}}>{b}</h1>
                <h1 style={{textAlign:'center'}}>{m}</h1>
            </div>

        </div>
    <Footer/>  
    </>
  )
}
