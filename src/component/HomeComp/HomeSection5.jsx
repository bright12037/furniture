import React from 'react'
import Image from 'next/image'
import './HomeSection5.css'
import image1 from'../images/product-banner-img-4.png'
import image2 from'../images/product-banner-img-5.png'
import image3 from '../images/product-1.png' 
import image4 from '../images/product-banner-img-6.png'
import img1 from '../images/product-1.png'
import img2 from '../images/product-2.png'
import img3 from '../images/product-3.png'
import img4 from '../images/product-4.png'
import img5 from '../images/product-5.png'
import img6 from '../images/product-6.png'
import img7 from '../images/product-7.png'
import img8 from '../images/product-8.png'
import img9 from '../images/hero-img-1.png' 
import pic1 from '../images/product.png'
import pic2 from '../images/blog-post-1.png'
import pic3 from '../images/blog-post-2.png'
import pic4 from '../images/blog-post-3.png'

import { Homesection5card } from './HomeSection4cards'
import { FaArrowRight } from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";
import { FaTags } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";



const HomeSection5 = () => {

  return (
    <div>
        <div className='Section5Main'>

                <div className='Setion5'>
                    <div className='section5TopLeft'>
                        <Image src={image1} alt='hh' />
                        <div className='section5TopLeftbottom'>
                            <p style={{fontSize:"24px", fontWeight:"400", paddingBottom:"4px"}}> MEGA SALE <span style={{color:"#FF7C0A"}}>65% OFF</span> </p>
                            <p style={{fontSize:" 40px", fontWeight:"800",  paddingBottom:"4px"}}>New Sofa Collections</p>
                            <p style={{fontSize:"20px", fontWeight:"400", color:"gray",  paddingBottom:"4px"}}>Assertively target market-driven intellectual capital <br /> free text quiz Bibendum holistic.</p>
                            <button style={{padding:"15px 20px", color:"white", border:"none", backgroundColor:"#FF7C0A", borderRadius:"10px"}}>Shop Now</button>
                        </div>
                    </div>

                    <div className='section5TopRight'>
                        <Image src={image2} alt='hh' />
                        <div className='section5TopRightbottom'>
                                <p style={{fontSize:"18px", fontWeight:"400"}}> MEGA SALE <span style={{color:"#FF7C0A"}}>65% OFF</span> </p>
                                <p style={{fontSize:" 32px", fontWeight:"800", color:"rgb(25, 29, 40)"}}>Chair Collections</p>
                                <button style={{padding:"15px 20px", color:"white", border:"none", backgroundColor:"green", borderRadius:"10px"}}>Shop Now</button>
                            </div>
                    </div>
                </div>

                <div className='section5middle'>
                    <h1>Featured Brand Products</h1>
                    <p>Collaboratively pursue proactive vortals whereas granular best practices <br/>
                        Collaboratively promote functional markets through process-centric users.</p>
                </div>
{/* ================================================================================================================================= */}
                <div className='section5Bottomdiv'> 
                        <div  className='section5Bottomdivchild'>
                            {Homesection5card.slice(0,3).map((data, index) =>(
                                <div key={index} className='holder'>
                                        <div>
                                            <Image src={data.img} width={110} alt='hh'/>
                                        </div>
                                        <div style={{marginLeft:"auto"}}>
                                                <div style={{color:"#FF7C0A", display:"flex", paddingBottom:"10px"}}>
                                                        <p><TiStarFullOutline /></p>
                                                        <p><TiStarFullOutline /></p>
                                                        <p><TiStarFullOutline /></p>
                                                </div>
                                                <div >
                                                    <p id="bottel" style={{paddingBottom:"10px", fontWeight:"bold"}}>{data.text1}</p>
                                                    <p style={{paddingBottom:"10px", color:"rgb(109, 179, 86)", fontWeight:"800"}}> <span style={{textDecoration:"line-through", color:"gray"}}>{data.text2} </span>{data.text3}</p>
                                                    <button id="shop" style={{ color:"black", border:"none", backgroundColor:"white"}}>{data.button} <FaArrowRight/> </button>
                                                </div>
                                        </div>
                                </div>
                            ))}
                        </div>
                        

                        <div className='middlediv'>
                                <div className='middleimg'>
                                    <Image src={image4} alt='hh'/>
                                </div>
                                <div className='middleimgtext'>
                                    <p style={{fontSize:"18px", fontWeight:"400"}}> UP TO <span style={{color:"#FF7C0A"}}>65% OFF</span> </p>
                                    <p style={{fontSize:" 32px", fontWeight:"800", color:"rgb(25, 29, 40)"}}>FURNITURE</p>
                                    <button style={{padding:"15px 25px", color:"white", border:"none", backgroundColor:"rgb(255, 124, 10)", borderRadius:"10px"}}>Shop Now</button>
                                </div>
                        </div>

                        <div  className='section5Bottomdivchild'>
                            {Homesection5card.slice(3,6).map((data, index) =>(
                                <div key={index} className='holder'>
                                        <div>
                                            <Image src={data.img} width={110} alt='hh'/>
                                        </div>
                                        <div style={{marginLeft:"auto"}}>
                                                <div style={{color:"#FF7C0A", display:"flex", paddingBottom:"10px"}}>
                                                        <p><TiStarFullOutline /></p>
                                                        <p><TiStarFullOutline /></p>
                                                        <p><TiStarFullOutline /></p>
                                                </div>
                                                <div >
                                                    <p id="bottel" style={{paddingBottom:"10px", fontWeight:"bold"}}>{data.text1}</p>
                                                    <p style={{paddingBottom:"10px", color:"rgb(109, 179, 86)", fontWeight:"800"}}> <span style={{textDecoration:"line-through", color:"gray"}}>{data.text2} </span>{data.text3}</p>
                                                    <button id="shop" style={{ color:"black", border:"none", backgroundColor:"white"}}>{data.button} <FaArrowRight/> </button>
                                                </div>
                                        </div>
                                </div>
                            ))}
                        </div>
                </div>
{/* ========================================================================================================================== */}
                <div className='section6'>
                    <div className='section6img'>
                        <Image src={pic1} alt='hh' />
                    </div>   
                    <div className='section6bottom'>
                        <p style={{fontSize:"32px", color:"rgb(25, 29, 40)",fontWeight:"800", lineHeight:"41px"}}>Subscribe Our Newsletter to <br/>
                         Get Latest Update & News</p>
                        <div style={{display:"flex", alignItems:"center", width:"100%", paddingTop:"10px"}}>
                            <input type="text" placeholder='Enter Email Address' />
                            <p style={{color:"white", backgroundColor:"#FF7C0A", fontWeight:"600", fontSize:"16px", padding:"20px 20px"}}>Subscribe Now</p>
                        </div>
                    </div>
                </div> 

                <div style={{marginTop:"40px", textAlign:"center"}}>
                    <p style={{fontSize:"40px", fontWeight:"700", paddingBottom:"10px"}}>Browse Recent Post</p>
                    <p style={{fontSize:"16px", color:"400",color:"rgb(93, 99, 116)"}}>Interactively product distinctive paradigms whereas one-to-one <br /> intellectual capital. resource sucking services.</p>
                </div>

                <div className='section6lastdiv'>
                    <div className='section6lastdivs'>
                        <Image src={pic2} alt='hh'/>
                        <div style={{padding:"0 25px"}}>
                        <div style={{display:"flex"}}>
                        <p style={{display:"flex", alignItems:"center",gap:"3px", fontSize:"14px", color:"rgb(93, 99, 116)"}}> <FaTags />  Organic Vegetable</p>
                        <p style={{display:"flex", alignItems:"center",gap:"3px", fontSize:"14px", color:"rgb(93, 99, 116)", marginLeft:"auto"}}> <MdAccessTime/> May 24, 2022</p>
                        </div>
                        <h1>Holiday Home Delivery <br /> We have Recently <br /> Ordered</h1>
                        <p style={{fontSize:"16px", color:"rgb(93, 99, 116)", paddingBottom:"20px"}}>Holisticly exploit equity invested growth <br /> strategies whereas enterpris</p>
                        <button>Explore More <FaArrowRightLong/></button>
                        </div>
                    </div>

                    <div className='section6lastdivs'>
                        <Image src={pic3} alt='hh'/>
                        <div style={{padding:"0 25px"}}>
                        <div style={{display:"flex"}}>
                        <p style={{display:"flex", alignItems:"center", gap:"3px", fontSize:"14px", color:"rgb(93, 99, 116)"}}> <FaTags />  Organic Vegetable</p>
                        <p style={{display:"flex", alignItems:"center", gap:"3px", fontSize:"14px", color:"rgb(93, 99, 116)", marginLeft:"auto"}}> <MdAccessTime/> May 24, 2022</p>
                        </div>
                        <h1>Holiday Home Delivery <br /> We have Recently <br /> Ordered</h1>
                        <p style={{fontSize:"16px", color:"rgb(93, 99, 116)", paddingBottom:"20px"}}>Holisticly exploit equity invested growth <br /> strategies whereas enterpris</p>
                        <button>Explore More <FaArrowRightLong/></button>
                        </div>
                    </div>

                    <div className='section6lastdivs'>
                        <Image src={pic4} alt='hh'/>
                        <div style={{padding:"0 25px"}}>
                        <div style={{display:"flex"}}>
                        <p style={{display:"flex", alignItems:"center",gap:"3px", fontSize:"14px", color:"rgb(93, 99, 116)"}}> <FaTags />  Organic Vegetable</p>
                        <p style={{display:"flex", alignItems:"center",gap:"3px", fontSize:"14px", color:"rgb(93, 99, 116)", marginLeft:"auto"}}> <MdAccessTime/> May 24, 2022</p>
                        </div>
                        <h1>Holiday Home Delivery <br /> We have Recently <br /> Ordered</h1>
                        <p style={{fontSize:"16px", color:"rgb(93, 99, 116)", paddingBottom:"20px"}}>Holisticly exploit equity invested growth <br /> strategies whereas enterpris</p>
                        <button>Explore More <FaArrowRightLong/></button>
                        </div>
                    </div>
                </div>


        </div>
    </div>
)
}
export default HomeSection5