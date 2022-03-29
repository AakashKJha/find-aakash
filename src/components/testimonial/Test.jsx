import React from 'react'
import '../testimonial/test.css';
import cert1 from '../../assets/1.png'
import cert2 from '../../assets/2.png'
import cert3 from '../../assets/3.jpg'
import cert4 from '../../assets/4.png'
import cert5 from '../../assets/5.png'
import cert6 from '../../assets/6.png'
import cert7 from '../../assets/7.png'
import cert8 from '../../assets/Java (Basic).png'
import cert10 from '../../assets/Problem solving.png'
import cert9 from '../../assets/9.jpg'
import cert11 from '../../assets/11.png'


import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

const data=[
  {
    image:cert11,
    platform:'Highradius',
    details:'I built and deployed an AI Enabled Fintech B2B full stack web-App Tech stack includes Java Servlet, MySQL.'
  },
  {
    image:cert10,
    platform:'Hackerrank',
    details:'It covers basic topics of Data Structures (such as Arrays, Strings) and Algorithms (such as Sorting and Searching).'
  },
  {
    image:cert8,
    platform:'Hackerrank',
    details:'It covers basic topics in Java language such as classes, data structures, inheritance, exception handling, etc'
  },
  {
    image:cert1,
    platform:'Google',
    details:'This certification was awarded by google after completing and passing the exam of fundamental Digital Marketing.'
  },
  {
    image:cert2,
    platform:'IBM',
    details:'This certificate was awarded by IBM after Completing the course Applied AI with DeepLearning Neural Networks work.'
  },{
    image:cert3,
    platform:'Microsoft student partner',
    details:'After completing python training bootcamp organised by Microsoft student partner at Lovely Professioanl University'
  },{
    image:cert4,
    platform:'Microsoft',
    details:'This is awarded by Microsoft after Completing the Asia Virtual Experience Program hosted in InsideSherpa.'
  },{
    image:cert5,
    platform:'Coursera',
    details:'Data Structure And Performence in Java non-credit course authorized by University of California SanDiego.'
  },{
    image:cert6,
    platform:'Coursera',
    details:'Object Oriented Programming in Java non-credit course authorized by University of California SanDiego'
  },
  
  {
    image:cert9,
    platform:'Hindustaan',
    details:'Awarded by Hindustan Dainik after writing an article on Pollution Under Hindustaan Pratibha Samman Program'
  },
]
const Test = () => {
  return (
    <section id='test'>
        <h5>Proff of learning</h5>
        <h2>Certificates</h2>
        <Swiper
          modules={[ Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }} 
        className="test_container container">
       
    
          {
            data.map(({image,platform,details},index)=>{
              return(
                <SwiperSlide kay={index} className='test'>
          <div className="cert_image">
          <img src={image} alt="certificate"></img>
      
          </div>
          <h5 className='cert_name'> {platform}</h5>
      <small className='cert_details'>{details}</small>
          </SwiperSlide>
              )
            })
          }
         
          
        
        </Swiper>
    </section>
  )
}

export default Test