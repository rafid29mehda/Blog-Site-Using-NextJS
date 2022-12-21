import Image from "next/image";
import React from 'react'

const Hero = () => {
  return (
    <>
    <div className="image">
      <Image className="hero" src="/../public/images/p1.jpg" width={1300} height={400} />
      <div className="rafid"><h2>Rafid Blogs</h2></div>
      <div className="mehda"><p>A place to share your knowledge</p></div>
    </div>
    </>
  )
}

export default Hero
