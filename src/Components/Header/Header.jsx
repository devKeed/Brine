import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className='menu-container'>
        <div className="logo"><img src="public\images\BRINE.png" alt="Brine Logo" /></div>
        <div className="menu">
            <div className="buy-Crypto">Buy Crypto</div>
            <div className="assets">Assets</div>
            <div className="download">Download</div>
            <div className="learn-more">Learn More</div>
        </div>
        <div className="header-action">
            <div className="create-account">Create Account</div>
            <div className="login"><button>Log In</button></div>
        </div>
      
    </div>
  )
}

export default Header
