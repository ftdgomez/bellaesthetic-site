import React, {useState} from 'react'
import Link from 'next/link'

const Header = () => {
  const [sidebar, setSidebar] = useState(false)

  return (
    <header className="custom-header-container">
      <Link href="/"><img src="/img/logo.png" alt=""/></Link>  
      <nav className="custom-header">
        <Link href="/">Home</Link>
        <Link href="/about-us">About Us</Link>
        <Link href="/treatments">Treatments</Link>
        <Link href="/special">Speacial</Link>
        <Link href="/book-now">Book Now</Link>        
      </nav>
      <a href="https://instagram.com"><img src="/img/ig.png" alt=""/></a>
    </header>
  )
}

export default Header
