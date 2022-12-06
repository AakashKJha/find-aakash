import React from 'react'
import '../contact/Contact.css';
import {IoMailOutline} from 'react-icons/io5'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs';
import  { useRef } from 'react';
import { useState } from "react";
import emailjs from 'emailjs-com';
const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h8pcktw', 'template_nrvzx8h', form.current, 'bMLgvwQByY-yf3ci1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setEmail("");
      setName("");
      setMessage("");
  };
  return (

    <section id='contact'>
    <h5>Get in Touch</h5>
    <h2>Contact Me</h2>
    <div className="contact_container container">
      <div className="contact_options">
        <article className="contact_option">
          <IoMailOutline className='contact_option_icon'/>
          <h4>Email</h4>
          <h5>aakashkumar2001jha@gmail.com</h5>
          <a href='mailto:aakashkumar2001jha@gmail.com' target="_blank">Send a message</a>
        </article>
        <article className="contact_option">
          <RiMessengerLine className='contact_option_icon'/>
          <h4>Messenger</h4>
          <h5>Aakash Kumar</h5>
          <a href='https://m.me/profile.php?id=100009073054392' target="_blank">Send a message</a>
        </article>
        {/*<article className="contact_option">
          <BsWhatsapp className='contact_option_icon'/>
          <h4>WhatsApp</h4>
          <h5>Aakash Kumar</h5>
          <a href='https://api.whatsapp.com/send?phone=+919234567890' target="_blank">Send a message</a>
        </article>*/}
        
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" placeholder='Enter Full Name' value={name} onChange={(e) => setName(e.target.value)} required></input>
        <input type="email" name='email' placeholder='your Email' onChange={(e) => setEmail(e.target.value)} value={email} required/>
        <textarea name='message'rows="7" placeholder='your Message' onChange={(e) => setMessage(e.target.value)} value={message} required></textarea>
        <button type="submit" className='btn btn-primary'>Send Message</button>
      </form>

    </div>
       </section>
  )
}

export default Contact