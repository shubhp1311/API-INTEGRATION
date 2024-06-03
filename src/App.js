import React from 'react'
import { ReactDOM } from 'react-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import Api from './Api'
import { Route, Routes } from 'react-router-dom'
import Clock from './Clock'

export default function App() {
  return (
    <>
     
      {/* <Home/> */}
     
      {/* <Api/> */}
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Api' element={<Api/>}></Route>
        <Route path='/Clock' element={<Clock/>}></Route>
      </Routes>
      {/* <Clock/> */}
      
    </>
  )
}


// import React from 'react'
// import Apii from './Apii'

// export default function App() {
//   return (
//     <div>
//       <Apii/>
//     </div>
//   )
// }
