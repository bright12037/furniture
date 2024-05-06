import React from 'react'
import './Footer.css'
import Image from 'next/image'
import logo from './images/logo.png'
import payment from './images/payment-img-1.png'
import payment2 from './images/payment-img-2.png'
import payment3 from './images/payment-img-3.png'
import payment4 from './images/payment-img-4.png'


const Footer = () => {
  return (
    <div>
        <div className='footersection'>
          <div className='footersectiontop'>
              <ul>
                <h1>Category</h1>
                <li>About Us</li>
                <li>Delivery Info</li>
                <li>Privacy policy</li>
                <li>Brands</li>
                <li>Contact Us</li>
                <li>Returns</li>
                <li>Site Map</li>
              </ul>

              <ul>
                <h1>Quick Links</h1>
                <li>About Us</li>
                <li>Delivery Info</li>
                <li>Privacy policy</li>
                <li>Brands</li>
                <li>Contact Us</li>
                <li>Returns</li>
                <li>Site Map</li>
              </ul>

              <ul>
                <h1>Contact Us</h1>
                <li>About Us</li>
                <li>Delivery Info</li>
                <li>Privacy policy</li>
                <li>Brands</li>
                <li>Contact Us</li>
                <li>Returns</li>
                <li>Site Map</li>
              </ul>

              <ul>
                <h1>Support</h1>
                <li>About Us</li>
                <li>Delivery Info</li>
                <li>Privacy policy</li>
                <li>Brands</li>
                <li>Contact Us</li>
                <li>Returns</li>
                <li>Site Map</li>
              </ul>
          </div>
          <div className='footersectionbottom'>
            <p>© All rights reserved Made by <span id="theme">ThemeTags</span></p>
            <Image src = {logo} alt='hh'/>
            <div>
                <Image src = {payment} alt='hh'/>
                <Image src = {payment2} alt='hh'/>
                <Image src = {payment3} alt='hh'/>
                <Image src = {payment4} alt='hh'/>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Footer
