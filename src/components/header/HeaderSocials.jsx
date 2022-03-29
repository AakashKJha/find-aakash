import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {GiTechnoHeart} from 'react-icons/gi';

function HeaderSocials() {
  return (
    <div className='hader_socials'>
        <a href="https://www.linkedin.com/in/coderaakash/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/starkofficial" target="_blank"><BsGithub /></a>
        <a href="https://starkofficial.github.io/" target="_blank"><GiTechnoHeart /></a>
        </div>
  )
}

export default HeaderSocials