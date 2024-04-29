
import React from 'react'
import Image from 'next/image'
import './Homesection1.css'
import image1 from '../images/hero-img-1.png'
import image2 from '../images/hero-img-2.png'
import image3 from '../images/hero-img-3.png'
import { GoDotFill } from "react-icons/go";
import { FaRegDotCircle } from "react-icons/fa";
import { useState } from 'react'



const HomeSection1 = () => {

  
  const [showSection1, setShowSection1] = useState(false)
  const [showSection2, setShowSection2] = useState(true)
  const [showSection3, setShowSection3] = useState(true)

  const handleShowSection1 = () => {
    setShowSection1(false);
    setShowSection2(true);
    setShowSection3(true);

  };


  const handleShowSection2 = () => {
    setShowSection1(true);
    setShowSection2(false);
    setShowSection3(true);
  };

  const handleShowSection3 = () => {
    setShowSection1(true);
    setShowSection2(true);
    setShowSection3(false);
  };


  return (
    <div>
        {showSection1 === false ? (  
        <div className='Section1'>
                <div className='LeftSection1'>
                        <p>Unique & Stylish</p> 
                        <p id='furniture'>Furniture</p>
                        <p id='sectiontext'>Assertively target market-driven intellectual capital with <br/>
                          worldwide human is simply free text quiz Bibendum holistic.</p>
                        <button>Shop Now</button>
                </div>
                <div className='RightSection1'  data-aos="fade-left">
                  <Image src={image1} />
                </div>

                <div className='dot'> 
                  <p onClick={handleShowSection1} style={{color : 'orange', fontSize : 20}}><FaRegDotCircle /></p>
                  <p onClick={handleShowSection2}><GoDotFill /></p>
                  <p onClick={handleShowSection3}><GoDotFill /></p>
                </div>

          </div>
        ) : ('')}


          {showSection2 === true ? ('') : (          
          <div className='Section1'>
                <div className='LeftSection1'>
                        <p>Unique & Stylish</p> 
                        <p id='furniture'><span style={{color:"black"}}>Modern</span> Furniture</p>
                        <p id='sectiontext'>Assertively target market-driven intellectual capital with <br/>
                          worldwide human is simply free text quiz Bibendum holistic.</p>
                        <button>Shop Now</button>
                </div>
                <div className='RightSection1' data-aos="fade-left">
                  <Image src={image2} />
                </div>

                <div className='dot'> 
                  <p onClick={handleShowSection1}><GoDotFill /></p>
                  <p onClick={handleShowSection2} style={{color : 'orange', fontSize : 20}}><FaRegDotCircle /></p>
                  <p onClick={handleShowSection3}><GoDotFill /></p>
                </div>

          </div> 
        )}

          {showSection3 === true ? ('') : (
                      <div className='Section1'>
                      <div className='LeftSection1'>
                              <p>Unique & Stylish</p> 
                              <p id='furniture'><span style={{color:"black"}}>New</span> Furniture</p>
                              <p id='sectiontext'>Assertively target market-driven intellectual capital with <br/>
                                worldwide human is simply free text quiz Bibendum holistic.</p>
                              <button>Shop Now</button>
                      </div>
                      <div className='RightSection1'  data-aos="fade-left">
                        <Image src={image3} />
                      </div>
      
                      <div className='dot'> 
                        <p onClick={handleShowSection1}><GoDotFill /></p>
                        <p onClick={handleShowSection2}><GoDotFill /></p>
                        <p onClick={handleShowSection3} style={{color : 'orange', fontSize : 20}}><FaRegDotCircle /></p>
                      </div>
      
                </div> 
          )}
{/* you can use 
{show1===true && <div>....</div>}
{show2===true && <div>.....</div>}
{show3===true && <div>....</div>}
 */}

    </div>
  )
}

export default HomeSection1
