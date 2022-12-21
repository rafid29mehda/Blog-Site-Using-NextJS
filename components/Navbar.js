import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li><Link className='nav' href="/signup">Sign Up</Link></li>
        <li><Link className='nav' href="/about">About</Link></li>
        <li><Link className='nav' href="/contact">Blog</Link></li>
        <li><Link className='nav' href="/">Home</Link></li>
        
        
        
      </ul>
    </div>
  )
}

export default Navbar
