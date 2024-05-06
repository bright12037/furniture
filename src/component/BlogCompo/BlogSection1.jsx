'use client'
import React from 'react'
import '../BlogCompo/BlogSection1.css'
import Image from 'next/image';
import bgimg from './blogImg/bg-shape-6.png'

import { HiOutlineChevronDoubleRight } from "react-icons/hi";

const BlogSection1 = () => {
  return (
    <div>
      <div className='blogTop'>
        <h1>Blog Grid</h1>
        <div className='blogtopdiv'>
        <p>Home</p>
        <p><HiOutlineChevronDoubleRight /> </p>
        <p>Page</p>
        <p><HiOutlineChevronDoubleRight /> </p>
        <p>Blog Grid</p>
        </div>
        <Image src={bgimg} alt='hh' />
      </div>
      
    </div>
  )
}

export default BlogSection1
