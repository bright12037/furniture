'use client'
import React from 'react'
import './Navbar.css'
import Image from 'next/image'
import { useState } from 'react'
import flag from './images/usflag.png'
import flag2 from './images/flag2.png'
import flag3 from './images/flag3.png'
import logo from './images/logo.png'
import { CiMail } from "react-icons/ci";
import { VscLocation } from "react-icons/vsc";
import { BsCurrencyDollar } from "react-icons/bs";
import { RiContrast2Fill } from "react-icons/ri";
import { VscChevronDown } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoBagOutline } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import { FaCaretDown } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { TbCurrencyYuan } from "react-icons/tb";
import { FaYenSign } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css'; 



const Navbar = () => {

    AOS.init();

        const[Show, setShow] = useState(false)
        const[Show1, setShow1] = useState(false)
        const[Show2, setShow2] = useState(false)
        const[Show3, setShow3] = useState(false)

        const buttonShow = () => {
            setShow(!Show)
        }

        const buttonShow1 =  () => {
            setShow1(!Show1)
        }
        const usdShowDrop =  () => {
            setShow2(!Show2)
        }
        const currencyShowDrop =  () => {
            setShow3(!Show3)
        }


  return (
    
    <div className='MyNavBar'>
        <div className='TopNav'>
            <p>Welcome to our Organic store</p>
            <ul>
                <li> <CiMail /> Grossshop@gmail.com</li>
                <li id='NYC'> <VscLocation /> Washington, New york City</li>
                <li onClick={usdShowDrop}><Image className='flag' src={flag} alt="flag" width={20}  /> English<FaCaretDown style={{fontSize:"15px"}} /></li>
                <li id='usd' onClick={currencyShowDrop}>USD<FaCaretDown /></li>
                <li>Dark <RiContrast2Fill /></li>
            </ul>
        </div>


          <div className='parentBottomnav'>
                
                <div className='BottomNav'>
                        <Image src = {logo} alt = "a logo" width={200} />
                        <ul>
                            <li onClick={buttonShow} id='browse'>Browse Category<VscChevronDown /></li>

                            <li id="home">Home<VscChevronDown /></li>
                            <li>Products<VscChevronDown /></li>
                            <li>Blog<VscChevronDown /></li>
                            <li>Pages<VscChevronDown /></li>
                        </ul>

                        <div className='BottomNavicons'>
                            <p><CiSearch /></p>
                            <p><CgProfile /></p>
                            <p><IoBagOutline /></p>
                            <p onClick={buttonShow1} id='DotsIcon'><TbGridDots /></p>
                        </div>  
                </div>
          </div>
        {Show === false ? ('') : ( 
             <div className='DropdownBrowse' data-aos="fade-up" data-aos-duration="200">
             <ul>
                 <li> vegetables</li>
                 <li>Baby Care</li>
                 <li>vegetables</li>
                 <li>Cleaning</li>
                 <li>vegetables</li>        
             </ul>
         

         <ul>
             <li> Bakery & Biscuits</li>
             <li>vegetables</li>
             <li>Coffee & Drinks</li>
             <li>vegetables</li>
             <li>Beauty & Health</li>
         </ul>

         <ul>
             <li>Jam & Jellyvegetables</li>
             <li>Sports & Fitness</li>
             <li>Cold Drinks</li>
             <li>Fresh & Organic</li>
             <li>Honey</li>
         </ul>
     </div>)}
         
        {Show1 === false ? ('') : (
            <div className='DropdownDot' data-aos="fade-up" data-aos-duration="1000">
            <div style={{display:"flex", alignItems:"center"}}>
                    <Image src={logo} alt='logo' width={200}/>
                    <p onClick={buttonShow1} style={{marginLeft:"auto", fontSize:"20px", color:"rgb(255, 124, 10)", padding:"5px", borderRadius:"50%", backgroundColor:"rgb(247, 182, 128)", justifyContent:"center", display:"flex", cursor:"pointer"}}><IoCloseSharp /></p>
            </div>
           <h1>About Us</h1>
            <p>Explain to you how all this mistaken <br /> denouncing pleasure and 
                praising pain was <br /> born and we will give you a complete account <br /> of the
                 system, and expound <br /> the actual teachings. <br/><br/>
                 Mistaken denouncing pleasure and 
                 praising pain was born and we <br /> will give you complete 
                 account of the system <br /> expound.</p>
            <button>About us</button>
            <h1 >Contact info</h1>
            <p>Chicago 12, Melborne City, <br /> USA +8801682648101 <br /> info@example.com</p>
            <div>
                <p><CiFacebook /></p>
                <p><CiInstagram /></p>
                <p><FaTwitter /></p>
                <p><FaYoutube /></p>
            </div>
         </div>


        )}

                <div className='dropdown2'>
                    <p> Grocery Store</p>
                    <p> Grocery Store</p>
                    <p> Grocery Store</p>
                    <p> Grocery Store</p>
                    <p> Grocery Store</p>
                    <p> Grocery Store</p>
                </div>

              { Show2 === false ? ('') : (
                  <div className='usddrop' data-aos="fade-up" data-aos-duration="200" >
                  <div style={{display: "flex", color: "black", gap:"10px", fontSize:"14px", alignItems:"center"}}>
                      <Image src={flag} alt="flag" width={20} />
                      <p>USA</p>
                  </div>
                  <div style={{display: "flex", color: "black", gap:"10px", fontSize:"14px", alignItems:"center"}}>
                      <Image src={flag2} alt="flag" width={20} />
                      <p>Nigeria</p>
                  </div >
                  <div style={{display: "flex", color: "black", gap:"10px", fontSize:"14px", alignItems:"center"}}>
                      <Image src={flag3} alt="flag" width={20}/>
                      <p>Cameroon</p>
                  </div>
              </div>
              )}

              {Show3 === false ? ('') : (
                <div className='currency'data-aos="fade-up" data-aos-duration="200">
                    <p><TbCurrencyYuan />Chinese</p>
                    <p><FaYenSign />Japan</p>
                </div>)}
    </div>
  )
}

export default Navbar
