'use client'

import React from 'react'
import HomeSection1 from '@/component/HomeComp/HomeSection1'
import HomeSection2 from '@/component/HomeComp/HomeSection2'
import HomeSection4 from '@/component/HomeComp/HomeSection4'
import HomeSection5 from '@/component/HomeComp/HomeSection5'
import Navbar from '@/component/Navbar'
import { useState } from 'react'
import { FaHandPointer } from "react-icons/fa6";

const page = () => {

    const [lightModeState, setLightModeState] = useState(true)
        const colorChangeFunc = () => {
        setLightModeState(!lightModeState)
      }
  
  return (
      <div >
        <div className={lightModeState===true ? 'lightmode' : 'darkmode'}>
          
        <section> <Navbar theColorFunc={colorChangeFunc} navBarcolor = {lightModeState} /></section>
            
          <section> <HomeSection1 /> </section>
          <section> <HomeSection2 /></section>
          <section><HomeSection4 /></section>
          <section><HomeSection5 /></section>
          <p className='Pointer'><FaHandPointer /></p>
        </div>

      </div>
  )
}

export default page





// 'use client'
// import React from "react";
// import './furniture.css'
// import { furniturecards } from "./components/furniturecards";
// import Image from 'next/image';

// const page = () => {


//   return (
//     <div>
//           <h2>This is home page and data page</h2>
//           <hr />
//           <div className="cardDiv">
//               {furniturecards.map((data, index) => (
//                         <div>
//                         <div key={index} className='eachCard'>
//                           <Image src={data.img} width={200} height={200} alt=''/>
//                           <h2>{data.name}</h2>
//                           <p>{data.name2}</p>
//                           <p>{data.rating}</p>
//                           <div style={{display: "flex", alignItems: "center", gap: "40%"}}>
//                             <p>{data.amount}</p>
//                             <button className="cardBtn">Add to cart</button>
//                           </div>
//                         </div>
              
//                         <br />
//                       </div>
                    
//               ))}
            
//           </div>
//     </div>

//   )
// }
// export default page

