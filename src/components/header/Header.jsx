import React from 'react'
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import '../header/Header.css';
import me from '../../assets/me1.png'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
      <div className="side">
      <div className="me">
         <img className='me2' src={me}></img>
         </div>
      </div>
        <div className="side">
        <h5>Hello I'm</h5>
        <h1>Aakash Kumar</h1>
        <h5 className="text-light">
          Full stack developer, AI
          </h5>
        </div>
          <CTA />
          
          <a href='#contact' className='scroll_down'>Scroll Down</a>
            <HeaderSocials />
          
            
        </div>

    </header>
  )
}

export default Header