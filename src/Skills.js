import React from 'react'
import "./Skills.css"

export default function Skills(props) {
    return (
        <>
        <div id='flex1'>
            <div className="card" style={{ width: "250px" }}>
                <img className="card-img-top" src={props.l}
                 alt="Card image" style={{ width: "100%" }} />
                <div className="card-body">
                    <h4 className="card-title">{props.n}</h4>
                    <p className="card-text">{props.p}</p>
                    <a href={props.li } className="btn btn-primary">See Profile</a>
                </div>
            </div>
            </div>    
        </>
    )
}
