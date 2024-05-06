import React from 'react'
import Image from 'next/image'
import './HomeSection2.css'
import { homesection2card } from './Homesection2card'
import { GoDotFill } from "react-icons/go";
import pic1 from '../images/product-banner-img-1.png'
import pic2 from '../images/product-banner-img-2.png'
import pic3 from '../images/product-banner-img-3.png'
import { FaArrowRight } from "react-icons/fa6";

const HomeSection2 = () => {
  return (
    <div>
            <div className='parentdiv'>
                <h1 >Choose Your Category</h1>
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

            <div className='section3'>
                    <div className='bannerSection'>
                  <div className='bannerDivOne'>
                    <Image src={pic1} alt='' className='bannImage'/>

                    <div className='banerDivOneText'>
                      <h4>UP TO 20% OFF</h4>
                      <h2>Modern & Minimal</h2>
                      <p>Don’t miss avail the saving opportunity</p>
                      <button>Shop Now </button>
                    </div>
                  </div>

                  <div className='bannerDivTwo'>
                    <Image src={pic2} alt='' className='bannImage'/>

                    <div className='banerDivTwoText'>
                      <h4>UP TO 20% OFF</h4>
                      <h2>Modern & Minimal</h2>
                      <p>Don’t miss avail the saving opportunity</p>
                      <button>Shop Now </button>
                    </div>
                  </div>
                </div>


                <div className='bannerDivThree'>
                        <Image src={pic3} className='bannImage2'/>

                        <div className='banerDivThreeText'>
                          <h4>UP TO 20% OFF</h4>
                          <h2>New Sofa Collections</h2>
                          <p>Don’t miss avail the saving opportunity</p>
                          <button>Shop Now </button>
                        </div>
                  </div>
                
              </div>
                  
    </div>
  )
}

export default HomeSection2
