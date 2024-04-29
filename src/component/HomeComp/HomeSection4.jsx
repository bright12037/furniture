import React from 'react'
import { HomeSection4cards } from './HomeSection4cards'
import { HomeSection4cards2 } from './HomeSection4cards';
import { HomeSection4cards3 } from './HomeSection4cards';
import { HomeSection4cards4 } from './HomeSection4cards';
import Image from 'next/image';

import'./HomeSection4.css'
import { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";

import { homesection2card } from './Homesection2card';
import './Homesection1.css'
import { GoDotFill } from "react-icons/go";
import { FaRegDotCircle } from "react-icons/fa";


const HomeSection4 = () => {
  const[Show1,setShow1] = useState(true)
  const[Show2,setShow2] = useState(false)
  const[Show3,setShow3] = useState(false)
  const[Show4,setShow4] = useState(false)

  const Show1button =  () => {
    setShow1(true)
    setShow2(false)
    setShow3(false)
    setShow4(false)
  }

  const Show2button =  () => {
    setShow1(false)
    setShow2(true)
    setShow3(false)
    setShow4(false)
  }

  const Show3button =  () => {
    setShow1(false)
    setShow2(false)
    setShow3(true)
    setShow4(false)
  }
  const Show4button =  () => {
    setShow1(false)
    setShow2(false)
    setShow3(false)
    setShow4(true)
  }



  return (
    <div>
              <div className='Section4'>
                      <div className='Section4Top' style={{display:"flex", alignItems:"center"}}>
                        <p style={{fontSize:"40px", fontWeight:"700", }}>Featured Collections</p>
                        <p style={{fontSize:"16px", fontWeight:"400", marginLeft:"auto", color:"gray"}}>Globally drive principle-centered strategic theme areas vis- <br/>
                        a-vis goal-oriented best practices state of the Dynamically.</p>
                      </div>
                
                      <div className='Section4middle'>
                          <div className='Section4midddleLeft'>
                            {Show1 === true ? (<p id='Gaming' onClick={Show1button}> Gaming Chair<sup>12</sup></p>): (<p onClick={Show1button}> Gaming Chair<sup>12</sup></p>)}
                            {Show2 === true ? ( <p id='Gaming' onClick={Show2button}> Dining Set <sup>10</sup></p>) : (<p onClick={Show2button}> Dining Set <sup>10</sup></p> )}
                             {Show3 === true ? (<p id='Gaming'  onClick={Show3button}>Office Table <sup>20</sup></p> ) : (<p onClick={Show3button}>Office Table <sup>20</sup></p> )}
                             {Show4 === true ? (<p id='Gaming' onClick={Show4button}>Office Desk <sup>19</sup></p> ) : ( <p onClick={Show4button}>Office Desk <sup>19</sup></p>)}
                          </div>
                          <p style={{marginLeft:"auto"}}>All Furniture <FaArrowRight style={{color:"#FF7C0A"}}/></p>
                      </div>
{/* ==================================first items logic ======================================-====================== */}

                      {Show1 === true ? (
                              <div className='Section4Bottom'>
                              {HomeSection4cards.map((data, index) =>(
                                  <div key ={index} className='Section4internaldiv'>
                                      <Image src={data.img} />
                                      <p style={{color:"#FF7C0A", fontSize:"13px", fontWeight:"700"}}>{data.text1}</p>
                                      <p id='text2'>{data.text2}</p>
                                      <p >{data.rating}</p>
                                      <div style={{display:"flex", alignItems:"center"}}>
                                        <p style={{color: "#FF7C0A", fontSize:"17px", fontWeight:"700"}}>{data.Amount}</p>
                                        <button id='btn'>{data.text3}</button>
                                      </div>
                                      <div className='internaldivicon'>
                                        <div>{data.icon1}</div>
                                        <div>{data.icon2}</div>
                                        <div>{data.icon3}</div>
                                      </div>
                                      
                                  </div>
                              ))}
                        </div>
                     )  :('')}
{/* ==================================second items logic ===================== */}
                     {Show2 === true ? (
                      <div className='Section4Bottom'>
                             {HomeSection4cards2.map((data, index) =>(
                                 <div key ={index} className='Section4internaldiv'>
                                     <Image src={data.img} />
                                     <p style={{color:"#FF7C0A", fontSize:"13px", fontWeight:"700"}}>{data.text1}</p>
                                     <p id='text2'>{data.text2}</p>
                                     <p >{data.rating}</p>
                                     <div style={{display:"flex", alignItems:"center"}}>
                                       <p style={{color: "#FF7C0A", fontSize:"17px", fontWeight:"700"}}>{data.Amount}</p>
                                       <button id='btn'>{data.text3}</button>
                                     </div>
                                     <div className='internaldivicon'>
                                       <p>{data.icon1}</p>
                                       <p>{data.icon2}</p>
                                       <p>{data.icon3}</p>
                                     </div>
                                     
                                 </div>
                             ))}
                       </div>
                          ):('')}
{/* ==============================third item================================================ */}
                          {Show3 === true ? (
                             <div className='Section4Bottom'>
                             {HomeSection4cards3.map((data, index) =>(
                                 <div key ={index} className='Section4internaldiv'>
                                     <Image src={data.img} />
                                     <p style={{color:"#FF7C0A", fontSize:"13px", fontWeight:"700"}}>{data.text1}</p>
                                     <p id='text2'>{data.text2}</p>
                                     <p >{data.rating}</p>
                                     <div style={{display:"flex", alignItems:"center"}}>
                                       <p style={{color: "#FF7C0A", fontSize:"17px", fontWeight:"700"}}>{data.Amount}</p>
                                       <button id='btn'>{data.text3}</button>
                                     </div>
                                     <div className='internaldivicon'>
                                       <p>{data.icon1}</p>
                                       <p>{data.icon2}</p>
                                       <p>{data.icon3}</p>
                                     </div>
                                     
                                 </div>
                             ))}
                       </div>
                          ):('')}
{/* ==========================forth item========================= */}
                              {Show4 === true ? (
                      <div className='Section4Bottom'>
                             {HomeSection4cards4.map((data, index) =>(
                                 <div key ={index} className='Section4internaldiv'>
                                     <Image src={data.img} />
                                     <p style={{color:"#FF7C0A", fontSize:"13px", fontWeight:"700"}}>{data.text1}</p>
                                     <p id='text2'>{data.text2}</p>
                                     <p >{data.rating}</p>
                                     <div style={{display:"flex", alignItems:"center"}}>
                                       <p style={{color: "#FF7C0A", fontSize:"17px", fontWeight:"700"}}>{data.Amount}</p>
                                       <button id='btn'>{data.text3}</button>
                                     </div>
                                     <div className='internaldivicon'>
                                       <p>{data.icon1}</p>
                                       <p>{data.icon2}</p>
                                       <p>{data.icon3}</p>
                                     </div>
                                     
                                 </div>
                             ))}
                       </div>
                          ):('')}

              </div>

  </div>
  )
}

export default HomeSection4
