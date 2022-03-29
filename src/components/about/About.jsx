import React from 'react';
import '../about/About.css';
import ME from '../../assets/me1.png'
import {FaAward} from 'react-icons/fa';
import {FaUserGraduate} from 'react-icons/fa';
import {FaProjectDiagram} from 'react-icons/fa';

const About = () => {
  return (
   <section id='about'>
    <h5>get to know</h5>
    <h2>about me</h2>
    <div className="container about_container">
      <div className="about_me">
        <div className="about_me_img">
          <img src={ME} alt="About Image"></img>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
                <h5>Experience</h5>
                <small>0-1 Years+</small>
            </article>
            <article className='about_card'>
              <FaUserGraduate className='about_icon'/>
                <h5>College</h5>
                <small>LPU</small>
            </article>
            <article className='about_card'>
              <FaProjectDiagram className='about_icon'/>
                <h5>projects</h5>
                <small>10+</small>
            </article>
            
            

          </div>
          <p>A Developer with a strong passion for self-improvement. I have strong Problem-Solving skills & bring energy, patience, positivity and
cultural values to the team</p>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>

      </div>
   </section>
  )
}

export default About