import React from 'react'
import Image from 'next/image'
import './HomeSection2.css'
import { homesection2card } from './Homesection2card'
import { GoDotFill } from "react-icons/go";

const HomeSection2 = () => {
  return (
    <div>
            <div className='parentdiv'>
                <h1 style={{textAlign:"center", fontSize:"40px", fontWeight:"700"}}>Choose Your Category</h1>
                <div className='bottomsection'>
                    {homesection2card.map((data, index) =>(
                        <div key ={index} className='internaldiv'>
                            <Image src={data.img} />
                            <h3>{data.text}</h3>
                            <div style={{display:"flex", alignItems:"center"}}>
                            <span style={{color: "orange"}}><GoDotFill /></span>
                            <p>{data.text2}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    </div>
  )
}

export default HomeSection2
