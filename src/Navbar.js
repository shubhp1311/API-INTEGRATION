import React from 'react'
import ReactDOM from 'react-dom'
import img1 from "./images/logo192.png"
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { Link as Scroll } from 'react-scroll'

export default function Navbar() {
    return (
        <>
            <div id='navbar'>
                <img src={img1} alt='logo' height={80} width={80} style={{ marginLeft: '20px', marginTop: '10px' }} />
                <Link style={{ paddingLeft: '10px', fontWeight: 'bolder', fontSize: '25px', color: '#00BFFF', position: 'relative', top: '10px', textDecoration: 'none' }} to='/' >React Js</Link>
                <Scroll style={{ position: 'relative', left: '750px', color: '#00BFFF', fontWeight: 'bolder',cursor:'pointer' }} activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-130}
                    duration={500}
                    >Home</Scroll>
                <Scroll style={{ position: 'relative', left: '790px', color: '#00BFFF', fontWeight: 'bolder',cursor:'pointer' }}
                    activeClass="active"
                    to="tech"
                    spy={true}
                    smooth={true}
                    offset={30}
                    duration={500}
                    >Skills</Scroll>
                <span style={{ position: 'relative', left: '840px', color: '#00BFFF', fontWeight: 'bolder' }} className="dropdown-toggle" data-bs-toggle="dropdown">Project</span>
                <ul className="dropdown-menu">
                    <Link className="dropdown-item" to='Api'>Api</Link>
                    <Link className="dropdown-item" to='Clock' >Clock</Link>

                </ul>

            </div>


        </>
    )
}
