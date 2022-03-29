import React from 'react'
import '../nav/nav.css';
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {GiSkills} from 'react-icons/gi'
import {BsFillBookFill} from 'react-icons/bs'
import {BiMessageRoundedDots} from 'react-icons/bi';
import { useState } from 'react';
const Nav = () => {
  const [activenav, setActive] = useState('#')
  return (
    <nav>
      <a href='#' onClick={()=>setActive('#')}className={activenav==='#'?'active':''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=>setActive('#about')} className={activenav==='#about'?'active':''}><AiOutlineUser/></a>
      <a href='#exp' onClick={()=>setActive('#exp')} className={activenav==='#exp'?'active':''}><GiSkills/></a>
      <a href='#projects' onClick={()=>setActive('#projects')} className={activenav==='#projects'?'active':''}><BsFillBookFill/></a>
      <a href='#contact' onClick={()=>setActive('#contact')} className={activenav==='#contact'?'active':''}><BiMessageRoundedDots/></a>
    </nav>
  )
}

export default Nav