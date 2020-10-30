import React, {useState} from 'react'
import Link from 'next/link'

const Header = () => {
  const [sidebar, setSidebar] = useState(false)

  return (
    <header className="custom-header-container">
      <Link href="/"><img src="/img/logo.png" alt=""/></Link>  
      <nav className={`custom-header ${sidebar && 'sidebarActive'}`}>
        <Link href="/">Home</Link>
        <Link href="/about-us">About Us</Link>
        <Link href="/treatments">Treatments</Link>
        <Link href="/special">Speacial</Link>
        <Link href="/book-now">Book Now</Link>
        <a href="https://instagram.com">
          <img className="ig-logo" src="/img/ig.png" alt=""/>
        </a>
      </nav>
      <button onClick={()=>setSidebar(!sidebar)} className="btn-menu">
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>
      </button>
    </header>
  )
}

export default Header
