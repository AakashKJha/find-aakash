import React from 'react'
import '../footer/footer.css';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {GiTechnoHeart} from 'react-icons/gi';

function Footer() {
  return (
    <footer>
      <a href='#' className='footer_logo'>aakash</a>
    <ul className='parmalinks'>
      <li><a href='#'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#exp'>Skills</a></li>
      <li><a href='#projects'>projects</a></li>
      <li><a href='#test'>Certificates</a></li>
      <li><a href='#contact'>Contact</a></li>
      
    </ul>
    <div className="footer_socials">
      <a href='https://www.linkedin.com/in/coderaakash/' target="_blank"><BsLinkedin/></a>
      <a href='https://github.com/starkofficial' target="_blank"><BsGithub/></a>
      <a href='https://starkofficial.github.io/' target="_blank"><GiTechnoHeart/></a>

    </div>
    <div className="footer_copyright">
      <small>&copy;aakash.</small>
    </div>
    </footer>
  )
}

export default Footer