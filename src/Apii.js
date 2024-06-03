import React, { useState } from 'react'
import axios from 'axios';

export default function Apii() {
    const [a, abc] = useState('')
    const [b, cde] = useState([]);

    let search = () => {
        axios
            .get(
                // `https://api.unsplash.com/search/photos?page=1&query=${a}&client_id=qjDIDsUa2yv7WMtVL2hCLzQUDyKTwETeWhVC10Mqm3o`
                `GET /photos/random`
            )

            .then((response)=>{
                console.log(response);
                cde(response.data.results);

            }) 


    }
    return (
        <div>
            <h3 style={{ textAlign: 'center', position: 'relative', top: '180px' }}>NAME</h3>
            <input type="text" value={a} onChange={(e) => abc(e.target.value)} class="form-control" style={{ width: '300px', marginLeft: '470px', marginTop: '200px' }}></input>
            <button type="button" class="btn btn-primary" style={{ marginLeft: '580px', marginTop: '20px' }} onClick={search}>Primary</button><br/>

            {b.map((s)=>{
                return(
                    <img src={s.urls.small} alt='logo' height={150} width={150}/>
                )
            })}

        </div>
    )
}
